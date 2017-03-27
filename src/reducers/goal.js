import {
  FETCH_GOAL,
  FETCH_GOAL_SUCCESS,
  FETCH_GOALS,
  FETCH_GOALS_SUCCESS
} from '../actions/goalActions';

export default function goal(state = {}, action = {}) {
  switch(action.type) {
    case FETCH_GOAL:
      return { ...state, isLoading: true};
    case FETCH_GOAL_SUCCESS:
      return { isLoading: false, goal: action.goal};
    case FETCH_GOALS:
        return {...state, isLoading: true};
    case FETCH_GOALS_SUCCESS:
        return {isLoading: false, goals: action.goals};
    default:
      return state;
  }
}
