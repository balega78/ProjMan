import { loginAction } from '../actions/loginActions';

const defaultState = {
  error: '',
  isSubmited: false,
  token: '',
  isLoggedIn: false,
  loading: false,
  user: ''
};

export const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case loginAction.LOGIN_SUBMIT:
      return {
        ...state,
        isSubmited: true,
      };
    case loginAction.LOGIN_REQ:
      return {
        ...state,
        loading: true,
      };
    case loginAction.LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isLoggedIn: true,
        loading: false,
      };
    case loginAction.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
      };
    case loginAction.CLEAR_ERROR:
      return {
        ...state,
        error: '',
      };
    case loginAction.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case loginAction.LOGOUT:
      return defaultState;
    default:
      return state;
  }
};
