import React from 'react';
// import GreetingContainer from './greeting/greeting_container';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
// import LoginFormContainer from './session_form/login_form_container';
// import SignupFormContainer from './session_form/signup_form_container';
// import {AuthRoute} from '../util/route_util';
// import SearchContainer from './search/search_container';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import spotsIndexContainer from './spot_show/spots_index_container';
import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <header>
      <NavbarContainer />
    </header>
    <Switch>
      {/*<AuthRoute exact path="/login" component={ LoginFormContainer } />
      <AuthRoute exact path="/signup" component={ SignupFormContainer } />*/}
      <Route exact path ="/" component={ spotsIndexContainer } />
    </Switch>
  </div>
);

export default App;
