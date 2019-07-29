import React from 'react';

import SpotsIndex from '../spot_show/spots_index';
import PlacesMap from '../places_map/places_map';
import SpotsHeader from '../spot_show/spots_header';
import LoadingIcon from '../spot_show/loading_icon';

import {
  fetchSpots,
  deleteSpot
} from '../../actions/spot_actions';

import { openModal } from '../../actions/modal_actions';

const Search = ({ fetchSpots, deleteSpot, openModal,
  spots, users, currentUser, updateFilter, loading }) => {

  return (
    <div className="user-pane">
      <div className="top">
        <SpotsHeader />
      </div>

      <div className="main-container">
        <div className="left-half">
          <SpotsIndex
            fetchSpots={fetchSpots}
            deleteSpot={deleteSpot}
            openModal={openModal}
            spots={spots}
            users={users}
            currentUser={currentUser}
            loading={loading}

          />

        </div>

        <div className="right-half">
          <PlacesMap
            spots={spots}
            updateFilter={updateFilter}
          />
        </div>
      </div>

    </div>
  );
};

export default Search;
