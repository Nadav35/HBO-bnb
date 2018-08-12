import { connect } from 'react-redux';

import spotsIndex from './spots_index';
import { fetchSpots } from '../../actions/spot_actions';

const msp = ({ entities }) => {
  return {
    spots: Object.values(entities.spots),
    users: Object.values(entities.users)
  };
};

const mdp = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots())
  };
};

export default connect(msp, mdp)(spotsIndex);
