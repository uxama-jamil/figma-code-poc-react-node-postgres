import express from 'express';

import usersRoute from './user.route.js';
import authRoute from './auth.route.js'

const router = express.Router();

router.use('/users', usersRoute);
router.use('/auth', authRoute);

export default router;
