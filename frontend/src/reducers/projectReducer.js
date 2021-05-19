import { projectActions } from '../actions/projectActions';

const defaultState = {
    projects: [],
    project: {}
}

export const projectReducer = (state = defaultState, action) => {
    switch (action.type) {

        case projectActions.GET_PROJECTS: {
            return {
                ...state,
                projects: action.payload
            }
        }

        case projectActions.SET_PROJECT: {
            return {
                ...state,
                project: action.payload
            }
        }

        default:
            return state
    }
}