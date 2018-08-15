import { connect } from 'react-redux';

import { fetchSpots,
  deleteSpot } from '../../actions/spot_actions';
import { openModal } from '../../actions/modal_actions';
import Search from './search';
import { updateFilter } from '../../actions/filter_actions';

const msp = (state) => {

  return {
    spots: Object.values(state.entities.spots),
    users: state.entities.users,
    currentUser: state.session.currentUser
  };
};

const mdp = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots()),
    deleteSpot: id => dispatch(deleteSpot(id)),
    openModal: (modal, opArg) => dispatch(openModal(modal, opArg)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
  };
};

export default connect(msp, mdp)(Search);
