import apiService from '../common/services/apiService';

export const projectActions = {
    GET_PROJECTS: "GET_PROJECTS"
}

const setProjects = (projects) => ({
    type: projectActions.GET_PROJECTS,
    payload: projects
})

export const fetchProjects = () => dispatch => {
   return apiService.get('/projektek').then( 
        apiResponse => dispatch (setProjects(apiResponse.projects)),
        error => console.error(error)
    );
};