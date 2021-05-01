import { registerService } from '../services/registerService'

export const registerController = {
    post: async (req, res, next) => {
        try {
            await registerService.validateInput(req.body)
            const createdUser = await registerService.createUser(req.body)
            res.status(201).json(createdUser)
        } catch (error) {
            next(error)
        }
    }
}
