import axios from 'axios';
import setAuthorizationToken from '../utils/setAuthorizationToken';
import jwtDecode from 'jwt-decode';

export const SET_CURRENT_USER = 'SET_CURRENT_USER';

const defaultUrl = 'https://pelorus-analytics.herokuapp.com';

export function setCurrentUser(user) {
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  }
}

export function login(data) {
  return dispatch => {
    return axios.post(`${defaultUrl}/user_token`, data).then(res => {
      const token = res.data.jwt;
      const decode = jwtDecode(token);

      if(decode.role === "admin") {
        localStorage.setItem('jwtToken', token);
        setAuthorizationToken(token);
        dispatch(setCurrentUser(jwtDecode(token)));
      } else {
        alert('No authorized');
      }
    })
    .catch(err => {
      alert('Invalid login');
    });
  }
}

export function sendResetRequest(email) {
  return dispatch => {
    return axios.post(`${defaultUrl}/password/forgot`, email);
  }
}

export function sendResetPassword(password) {
  return dispatch => {
    return axios.post(`${defaultUrl}/password/reset`, password);
  }
}
