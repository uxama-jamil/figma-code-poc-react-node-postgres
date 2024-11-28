/**
 * User service which serves DB operation
 * required by user controller
 *
 * 
 */
import db from '../models/index.js';
import * as errors from '../utils/api-error.js';
import { generateToken } from '../utils/jwt.js';
import { generateLocalOtp, sendEmail } from '../utils/auth.js';

import bcrypt from 'bcryptjs';
import speakeasy from 'speakeasy';

/**
 * @constant {Sequelize.models} - User model extracted from db import
 */
const { User } = db.db;

const { NotFoundError, UnauthorizedError, BadRequestError } = errors.default;


/**
 * findAll function to retrieve all available users in system
 *
 * @returns {Promise} User object array
 */
const findAll = async () => User.findAll({
  include: [
    { model: Skill },
  ],
});

/**
 * findById function to fetch data for provided userId
 *
 * @param {number} userId - user id for which data needs to be fetched
 * @returns {Promise} User object
 */
const findById = async userId => User.findOne({
  where: { id: userId },
  include: [
    { model: Skill },
  ],
});

/**
 * findById function to fetch data for provided userId
 *
 * @param {number} userId - user id for which data needs to be fetched
 * @returns {Promise} User object
 */
const findByEmail = async data => {
  const { email, password } = data;

  try {
    // Check if user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundError();
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      console.log('inside invalid password!');
      throw new UnauthorizedError();
    }

    // Generate JWT token
    const token = generateToken(user);

    // If 2FA is enabled, generate and send OTP to the user
    // if (user.is_2fa_enabled) {
      const {otp, otpExpiresAt} = generateLocalOtp();

      // Store OTP details in the database
      await user.update({
        otp,
        otp_expires_at: otpExpiresAt,
        otp_sent_at: new Date(),
        otp_verified: false,
      });

      // Send OTP to user's email
      await sendEmail(user.email, otp, "OTP for sign in");

      return { message: 'OTP sent to email. Please verify it.', token };
    // } 
  } catch (error) {
    console.error(error);
    throw error;
  }
}

/**
 * create function to add new user
 *
 * @param {object} data - user object with information to be saved in system
 * @returns {Promise} Created user object
 */
const create = async (data) => {
  const { name, email, password } = data;

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the user in the database
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // Generate 2FA secret key (TOTP)
    const secret = speakeasy.generateSecret({ length: 20 });
    const {otp, otpExpiresAt} = generateLocalOtp();

    // Generate jwt token
    const token = generateToken(user);

    // Store 2FA secret and OTP information in the database
    await user.update({
      two_factor_secret: secret.base32,
      otp,
      otp_expires_at: otpExpiresAt,
      otp_sent_at: new Date(),
      otp_verified: false,
    });


    // Send OTP to user's email
    await sendEmail(user.email, otp, "OTP to register the account");

    return { message: 'user created succesfully.', token };

  } catch (error) {
    console.error(error);
    throw error;
  }
}



export {
  findAll,
  findById,
  create,
  findByEmail,
};
