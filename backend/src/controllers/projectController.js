import { projectService } from '../services/projectService'

export const projectController = {
  get: async (req, res, next) => {
    try {
      const projects = await projectService.listProjects()
      res.status(200).json(projects)
    }
    catch (error) {
      next(error)
    }
  }
}
