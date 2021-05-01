import { loginService } from '../services/loginService'

export const loginController = {
  login: async (req, res, next) => {
    try {
      res.status(200).json(await loginService.authorizeUser(req.body))
    }
    catch (error) {
      next(error)
    }
  }
}
