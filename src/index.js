import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, Route, IndexRedirect, IndexRoute } from 'react-router';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import setAuthorizationToken from './utils/setAuthorizationToken';
import requireAuth from './utils/requireAuth';
import jwtDecode from 'jwt-decode';
import { setCurrentUser } from './actions/authActions';

import rootReducer from './reducers/rootReducer';
import './index.css';

import App from './containers/App';
import LoginContainer from './containers/LoginContainer';
import HelmContainer from './containers/HelmContainer';
import FacilityContainer from './containers/FacilityContainer';
import FacilityMain from './components/facility/FacilityMain.js';
import GoalsContainer from './containers/GoalsContainer';
import GoalContainer from './containers/GoalContainer';

import NoMatch from './components/common/NoMatch';
import ResetPasswordContainer from './containers/ResetPasswordContainer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/login" />
        <Route path="login" component={LoginContainer} />
        <Route path="reset-password" component={ResetPasswordContainer}/>
        <Route path="helm" component={requireAuth(HelmContainer)} />
        <Route path="facility/:id" component={requireAuth(FacilityContainer)}>
          <IndexRoute component={FacilityMain} />
        </Route>
        <Route path="/goals" component={GoalsContainer} />
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
