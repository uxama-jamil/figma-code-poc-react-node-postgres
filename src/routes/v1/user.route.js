import express from 'express';
import { Validator } from 'express-json-validator-middleware';

import { addUser, getUsers, getUser,
    forgotPassword, resetPassword,
    validateOtp, generateOtp } from '../../controllers/user.controller.js';
import authenticate from '../../middlewares/authenticate.js';
import { addUserSchema } from '../../validations/users-request.schema.js';

const router = express.Router();
const { validate } = new Validator();

/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         firstName:
 *           type: string
 *           description: The user's first/given name.
 *           example:
 *         lastName:
 *           type: string
 *           description: The user's surname/family name.
 *           example: Patil
 *         gender:
 *           type: string
 *           enum: [Male, Female, Other]
 *

/**
 * @openapi
 * /v1/users:
 *   post:
 *     tags:
 *       - v1
 *     description: Endpoint to create/add new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateUserRequest'
 *     responses:
 *       200:
 *         description: Application helath details.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CreateUserSuccess'
 *
 */
// router
//   .route('/')
//   .post(validate({ body: addUserSchema }), addUser)
//   .get(getUsers);

router
  .route('/:userId')
  .get(getUser);

export default router;
