import { Projects } from '../models/Projects';
import { projmanError, error } from './statusDTOService';

export const projectService = {
  listProjects: async () => {
    const projects = await Projects.findAllProjects()

    if (projects) {
      return {
        projects: projects
      }
    } throw projmanError(error.UNAUTHORIZED_REQUEST, 'Something went wrong')
  },
}
