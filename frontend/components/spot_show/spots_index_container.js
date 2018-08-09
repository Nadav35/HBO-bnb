import { connect } from 'react-redux';

import spotsIndex from './spots_index';
import { fetchSpots } from '../../actions/spot_actions';

const mps = ({ entities }) => {
  return {
    spots: Object.values(entities.spots)
  };
};

const mdp = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots())
  };
};

export default connect(mps, mdp)(spotsIndex);
