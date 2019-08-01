import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import SpotShowContainer from './spot_show/spot_show_container';
import BookingsIndexContainer from './bookings/bookings_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import spotsIndexContainer from './spot_show/spots_index_container';
import SearchContainer from './search/search_container';
import FilteredSpotsContainer from './places_map/filtered_spots_container';
import Footer from './navbar/footer.jsx';

import Modal from './modal/modal';

const App = () => (
  <div>
    <Modal />
    <header>
      <NavbarContainer />
    </header>
    <Switch>
      <Route path="/api/spots/:spotId" component={SpotShowContainer} />
      <Route path="/api/bookings/:userId" component={BookingsIndexContainer} />
      <Route path="/search" component={FilteredSpotsContainer} />
      <Route exact path="/" component={SearchContainer} />

    </Switch>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default App;
