import apiService from '../common/services/apiService';
import history from '../history';

export const loginAction = {
  LOGIN_SUBMIT: 'LOGIN_SUBMIT',
  LOGIN_REQ: 'LOGIN_REQ',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  SET_ERROR: 'SET_ERROR',
  CLEAR_ERROR: 'CLEAR_ERROR',
  LOGOUT: 'LOGOUT',

};

const logoutAction = { type: loginAction.LOGOUT };
const loginSubmit = { type: loginAction.LOGIN_SUBMIT };
const clearError = { type: loginAction.CLEAR_ERROR };
const setError = message => ({ type: loginAction.SET_ERROR, payload: message });
const loginRequest = { type: loginAction.LOGIN_REQ };
const loginFailure = { type: loginAction.LOGIN_FAILURE };
const loginSuccess = (token, username) => ({
  type: loginAction.LOGIN_SUCCESS,
  payload: {
    token: token,
    user: username
  },
});

export const submit = () => dispatch => {
  dispatch(loginSubmit);
  dispatch(clearError);
};

export const logout =() =>async dispatch =>  dispatch(logoutAction)

export const login = (username, password) => async dispatch => {
  dispatch(loginRequest);
  const res = await apiService.post('/login', { username, password }, false);
  if ((!!res.status && res.status === 'error') || !res.token || !res.rights) {
    dispatch(setError('Error'));
    dispatch(loginFailure);
  } else {
    dispatch(loginSuccess(res.token, username));
    localStorage.setItem('token', res.token);
    localStorage.setItem('rights', res.rights);
    localStorage.setItem('user', username);
    
    history.push('/projektek');
  }
};
