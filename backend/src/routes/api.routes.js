import express from 'express';
const cors = require('cors');
import { verifyAccesToken } from '../middlewares/authenticationMiddleware'

import {
  loginController,
  registerController,
}
  from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());
router.post('/login', loginController.login)
router.post('/register', registerController.post);

router.use(verifyAccesToken);

export default router;
