import axios from 'axios';

export const CREATE_CLIENT = 'CREATE_CLIENT';
export const CREATE_CLIENT_SUCCESS = 'CREATE_CLIENT_SUCCESS';
export const CHANGE_HOUSE = 'CHANGE_HOUSE';

const defaultUrl = 'https://pelorus-analytics.herokuapp.com';

export function createClient(client) {
  return dispatch => {
    dispatch({type: CREATE_CLIENT});

    return axios.post(`${defaultUrl}/users`, client).then(res => {
      dispatch(createClientSuccess(res.data.client));
    }).catch(err => {
      console.log(err);
    })
  }
}

export function createClientSuccess(client) {
  return {
    type: CREATE_CLIENT_SUCCESS,
    client
  }
}

export function changeHouse(data) {
  return dispatch => {
    dispatch({type: CHANGE_HOUSE});

    return axios.post(`${defaultUrl}/update_house`, data).then(res => {
      console.log('change successful');
    }).catch(err => {
      console.log(err);
    })
  }
}
