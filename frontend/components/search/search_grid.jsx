import React from 'react';
import Geosuggest from 'react-geosuggest';
import { Link } from 'react-router';

class SearchGrid extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <span className="search-box">
        <Geosuggest
          className="search-input"
          placeholder="try Afghanistan"
          id="top-bar"
          autocomplete="off"
        />

      </span>
    );

  }
}

export default SearchGrid;
