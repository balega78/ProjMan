//not used yet

export const userController = {
  getUser: async (req, res, next) => {
    try {
      res.status(200).json(await req.authToken.username)
    }
    catch (error) {
      next(error)
    }
  }
}
