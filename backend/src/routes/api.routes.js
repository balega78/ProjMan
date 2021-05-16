import express from 'express';
const cors = require('cors');
import { verifyAccesToken } from '../middlewares/authenticationMiddleware'

import {
  loginController,
  registerController,
  projectController
}
  from '../controllers';

const router = express.Router();

router.use(cors());
router.use(express.json());
router.post('/login', loginController.login)
router.post('/registration', registerController.post);

router.use(verifyAccesToken);
router.get('/projektek', projectController.get)
//from here I can get use of token

export default router;
