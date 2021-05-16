import { projectActions } from '../actions/projectActions';

const defaultState = []

export const projectReducer = (state = defaultState, action) => {
    switch (action.type) {

        case projectActions.GET_PROJECTS: {

            return action.payload;
        }
        default:
            return state
    }
}