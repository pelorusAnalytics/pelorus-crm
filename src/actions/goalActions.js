import axios from 'axios';

export const FETCH_GOAL = 'FETCH_GOAL';
export const FETCH_GOAL_SUCCESS = 'FETCH_GOAL_SUCCESS';

export const FETCH_GOALS = 'FETCH_GOALS';
export const FETCH_GOALS_SUCCESS = 'FETCH_GOALS_SUCCESS';

export const CREATE_GOAL = 'CREATE_GOAL';
export const CREATE_GOAL_SUCCESS = 'CREATE_GOAL_SUCCESS';

const defaultUrl = 'https://pelorus-analytics.herokuapp.com'

export function fetchGoal(goal) {
  return dispatch => {

    dispatch({type: FETCH_GOAL});

    return axios.get(`${defaultUrl}/predefined_goals/${goal}`)
      .then(res => {
        dispatch(fetchGoalSuccess(res.data.goal));
      })
  }
}

export function createGoal(goal) {
  return dispatch => {
    dispatch({type: CREATE_GOAL});

    return axios.post(`${defaultUrl}/predefined_goals`, goal).then(res => {
      dispatch(fetchGoals)
    }).catch(err => console.log(err))
  }
}

export function fetchGoalSuccess(goal) {
  return {type: FETCH_GOAL_SUCCESS, goal}
}

function fetchGoalsSuccess(goals) {
  return {
    type: FETCH_GOALS_SUCCESS,
     goals
  }
}

export function fetchGoals() {
  return dispatch => {
    dispatch({type: FETCH_GOALS});

    return axios.get(`${defaultUrl}/predefined_goals`)
      .then(res => {
        const goals = res.data.predefined_goals;
        dispatch(fetchGoalsSuccess(goals))
      });
  }
}
