import { db } from '../data/connection'

export const Projects = {
    save: async project => {
        const { results } = await db.query('INSERT INTO projects SET ?', project)
        return results
    },
    
    findAllProjects: async () => {
        const { results } = await db.query('SELECT * FROM projects')
        return results
    },

    findProjectById: async (projectId) => {
        const { results } = await db.query('SELECT * FROM projects WHERE id=? ', projectId)
        return results[0]
    }
}