/**
 * User controller
 *
 * 
 */
import httpStatus from 'http-status';

import * as errors from '../utils/api-error.js';
import * as response from '../middlewares/response-handler.js';
import { findAll, create, findByEmail } from '../services/user.service.js';
import { generateLocalOtp, sendEmail } from '../utils/auth.js';


// TODO: To be refactored
import db from '../models/index.js';
import { generateToken } from '../utils/jwt.js';

import bcrypt from 'bcryptjs';

/**
 * @constant {Sequelize.models} - User model extracted from db import
 */
const { User } = db.db;
/////////



/**
 * @constant {function} responseHandler - function to form generic success response
 */
const responseHandler = response.default;
/**
 * @constant {NotFoundError} NotFoundError - not found error object
 */
const { NotFoundError } = errors.default;

/**
 * Function which provides functionality
 * to add/create new user in system
 *
 * @param {*} req - express HTTP request object
 * @param {*} res - express HTTP response object
 */
const addUser = async (req, res) => {
  const response = await create(req.body);
  res.status(httpStatus.CREATED).send(responseHandler(response));
}

/**
 * Function which provides functionality
 * to retrieve all users present in system
 *
 * @param {*} req - express HTTP request object
 * @param {*} res - express HTTP response object
 */
const getUsers = async (req, res) => {
  const users = await findAll();
  res.status(httpStatus.OK).send(responseHandler(users));
};

/**
 * Function which provides functionality
 * to retrieve specific user based on provided userId
 *
 * @param {*} req - express HTTP request object
 * @param {*} res - express HTTP response object
 *
 * @throws {NotFoundError} - if no such user exists for provided userId
 */
const getUser = async (req, res) => {
  
  const user = await findByEmail(req.body);
  if (!user) {
    throw new NotFoundError();
  }

  res.status(httpStatus.OK).send(responseHandler(user));
};


const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ success: 'false', error: 'User not found' });
    }

    // Generate OTP and set expiration time
    const {otp, otpExpiresAt} = generateLocalOtp();

    // generate token
    const token = generateToken(user);
    
    // Update user with OTP details
    await user.update({
      otp,
      otp_expires_at: otpExpiresAt,
      otp_sent_at: new Date(),
      otp_verified: false,
    });

    

    // Send OTP to user's email
    await sendEmail(user.email, otp, "OTP for password reset");

    res.status(httpStatus.OK)
      .send(
        responseHandler({ message: 'OTP sent to email for password reset', token })
      );
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: 'false', error: 'Error sending OTP' });
  }
}

const resetPassword = async (req, res) => {
  // Reset password route
  const { email, newPassword } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    
    if (!user) {
      return res.status(404).json({ success: 'false', error: 'User not found' });
    }

    if(!user.otp_verified) {
      return res.status(400).json({ success: 'false', error: 'OTP not verified' });
    }

    // Hash new password and update it
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await user.update({ password: hashedPassword });

    res.status(httpStatus.OK).send(responseHandler({ message: 'Password reset successful' }));
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: 'false', error: 'Error resetting password' });
  }
}


const validateOtp = async (req, res) => {
  // Validate OTP route
  const { email, otp } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ success: 'false', error: 'User not found' });
    }

    // Check if OTP is expired
    if (new Date() > new Date(user.otp_expires_at)) {
      return res.status(400).json({ success: 'false', error: 'OTP has expired' });
    }

    // Validate the OTP
    if (user.otp !== otp) {
      return res.status(400).json({ success: 'false', error: 'Invalid OTP' });
    }

    // Mark OTP as verified
    await user.update({
      otp_verified: true,
    });

    res.status(httpStatus.OK).send(responseHandler({ message: 'OTP verified successfully.' }));
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: 'false', error: 'Error validating OTP' });
  }
}

const generateOtp = async (req, res) => {

  const { email } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ success: 'false', error: 'User not found' });
    }

    // generete otp
    const {otp, otpExpiresAt} = generateLocalOtp();

     // Update user with OTP details
     await user.update({
      otp,
      otp_expires_at: otpExpiresAt,
    });

    // Send OTP to user's email
    await sendEmail(user.email, otp, "Here is your OTP code");

    res.status(httpStatus.OK).send(responseHandler({ message: 'OTP sent to email for password reset' }));

  } catch (error) {
    res.status(500).json({ success: 'false', error: 'Error occurred while generating the otp' });
  }
}

export {
  addUser,
  getUsers,
  getUser,
  forgotPassword,
  resetPassword,
  validateOtp,
  generateOtp
};