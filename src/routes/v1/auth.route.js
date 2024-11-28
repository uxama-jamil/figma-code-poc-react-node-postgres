import express from 'express';
import { Validator } from 'express-json-validator-middleware';

import { addUser, getUsers, getUser,
    forgotPassword, resetPassword,
    validateOtp, generateOtp } from '../../controllers/user.controller.js';
import authenticate from '../../middlewares/authenticate.js';
import { addUserSchema } from '../../validations/users-request.schema.js';

const router = express.Router();
const { validate } = new Validator();



router
  .route('/signup')
  .post(addUser);

router
  .route('/signin')
  .post(getUser);

router
  .route('/forgot-password')
  .post(forgotPassword);

router
  .route('/reset-password')
  .post(authenticate, resetPassword);

router
  .route('/validate-otp')
  .post(authenticate, validateOtp);

router
  .route('/generate-otp')
  .post(authenticate, generateOtp);


export default router;
