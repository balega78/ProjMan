import { projectService } from '../../src/services/projectService';

jest.mock('../../src/models/Projects');
import { Projects } from '../../src/models/Projects'

const mockResponse = [
  {
    id: 1,
    name: 'BFK Nonprofit Zrt. 2020-as szakmai feladatainak ellátása',
    type: "működés",
    aid: 100,
    start: 1577836800,
    finish: 1640991599
  },
  {
    id: 2,
    name: 'BFK Nonprofit Zrt. 2021. évi működése',
    type: "működés",
    aid: 100,
    start: 1609459200,
    finish: 1640991599
  }]

Projects.findAllProjects.mockImplementation(() =>
mockResponse)

  describe('listProjects', () => {
    it('should return list of projects', async () => {
      try {
        const projects = await projectService.listProjects({})
        expect(projects).toEqual(mockResponse)
      } catch (err) {
        console.log(err)
      }
  })
})
