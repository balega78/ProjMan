import { User } from '../models/User';
import { projmanError, error } from './statusDTOService';
//import { verifyAccesToken } from '../middlewares/authenticationMiddleware';

const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken");

export const loginService = {
  authorizeUser: async ({ username, password }) => {
    if (!username && !password) {
      throw projmanError(error.MISSING_INPUT, 'username and password')
    } else if (!username) {
      throw projmanError(error.MISSING_INPUT, 'username')
    } else if (!password) {
      throw projmanError(error.MISSING_INPUT, 'password')
    }
    const userResponse = await loginService.authenticateUser(username, password)
    return await loginService.generateUserToken(userResponse)
  },

  authenticateUser: async (username, password) => {
    let isPasswordValid = false
    const getUserFromDB = await User.findUserByUsername(username)
    let usersPasswordFromDB = ''
    if (getUserFromDB) {
      usersPasswordFromDB = getUserFromDB.password
      isPasswordValid = bcrypt.compareSync(password, usersPasswordFromDB)
    }
    if (isPasswordValid) {
      return getUserFromDB
    } throw projmanError(error.UNAUTHORIZED_REQUEST, 'Username or password is incorrect.')
  },

  generateUserToken: async (user) => {
    const token = jwt.sign({
      userId: user.id,
    },
      process.env.PRIVATE_KEY_VALUE,
      { expiresIn: process.env.TOKEN_EXPIRE })
    return {
      status: "ok",
      token: token, 
      rights: user.rights
    }
  },
}
