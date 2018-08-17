import React from 'react';

import SpotsIndex from '../spot_show/spots_index';
import PlacesMap from '../places_map/places_map';
import FilteredTop from './filtered_top';

const ShowFilteredSpots = ({ updateFilter, openModal,
  deleteSpot, spots, users, currentUser,
  lat, lng }) => {


    return (
      <div className="filtered-spots-container">
        <div className="filtered-top">
          <FilteredTop
            currentUser={currentUser}
            spots={spots}
          />
        </div>
        <div className="container-filters">
          <div className="left-filtered">
            <SpotsIndex
              deleteSpot={deleteSpot}
              openModal={openModal}
              users={users}
              currentUser={currentUser}
              spots={spots}
            />
          </div>
          <div className="right-filtered">
            <PlacesMap
              spots={spots}
              updateFilter={updateFilter}
              lat={lat}
              lng={lng}
              anySpots={Object.values(spots).length > 0}
            />
          </div>
        </div>


      </div>
    );
  };

  export default ShowFilteredSpots;
