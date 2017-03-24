import axios from 'axios';

export const FETCH_FACILITIES = 'FETCH_FACILITIES';
export const FETCH_FACILITIES_SUCCESS = 'FETCH_FACILITIES_SUCCESS';


const defaultUrl = 'https://pelorus-analytics.herokuapp.com';

export function fetchFacilities() {
  return dispatch => {

    dispatch({type: FETCH_FACILITIES});

    return axios.get(`${defaultUrl}/facilities`).then(res => {
      const facilities = res.data.facilities;

      dispatch(fetchFacilitiesSuccess(facilities));
    })
  }
}

export function fetchFacilitiesSuccess(facilities) {
  return {
    type: FETCH_FACILITIES_SUCCESS,
    facilities
  }
}
