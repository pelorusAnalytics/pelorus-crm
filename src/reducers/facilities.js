import {
  FETCH_FACILITIES,
  FETCH_FACILITIES_SUCCESS
} from '../actions/facilityActions';

export default function facilities(state = [], action = {}) {
  switch(action.type) {
    case FETCH_FACILITIES:
      return {...state, isLoading: true};
    case FETCH_FACILITIES_SUCCESS:
      return {...state, isLoading: false, facilities: action.facilities};
    default:
      return state;
  }
}
