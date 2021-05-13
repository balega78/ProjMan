import express from 'express';
const cors = require('cors');
import { verifyAccesToken } from '../middlewares/authenticationMiddleware'

import {
  loginController,
  registerController,
}
  from '../controllers';
import { userController } from '../controllers/userController';

const router = express.Router();

router.use(cors());
router.use(express.json());
router.post('/login', loginController.login)
router.post('/registration', registerController.post);

router.use(verifyAccesToken);
router.get('/user', userController.getUser)
//from here I can get use of token

export default router;
