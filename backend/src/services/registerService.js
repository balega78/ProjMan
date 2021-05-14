import { User } from '../models';
import { projmanError, error } from './statusDTOService'

const bcrypt = require('bcryptjs');
const saltRounds = 10;

export const registerService = {
    validateInput: async ({ username, password, rights }) => {
        if ((username == undefined || username.length == 0) && (password == undefined || password.length == 0) && (rights == undefined || rights.length == 0)) {
            throw projmanError(error.MISSING_INPUT, 'username and password')
        }
        if (password == undefined || password.length == 0) {
            throw projmanError(error.MISSING_INPUT, 'password')
        }
        if (username == undefined || username.length == 0) {
            throw projmanError(error.MISSING_INPUT, 'username')
        }
        if (rights == undefined || rights.length == 0) {
            throw projmanError(error.MISSING_INPUT, 'username')
        }
        if (await User.findUserByUsername(username)) {
            throw projmanError(error.USERNAME_ALREADY_TAKEN)
        }
        if (password.length < 8) {
            throw projmanError(error.FIELD_LENGTH_ERROR, 'password is 8')
        }
    },
    createUser: async user => {
        const hashPassword = bcrypt.hashSync(user.password, saltRounds)
        const userToBeSaved = {
            username: user.username,
            password: hashPassword,
            rights: user.rights
        };
        const savedUser = await User.save(userToBeSaved)
        

    return {
      id: savedUser.insertId,
      username: userToBeSaved.username,
    }
  },
}
