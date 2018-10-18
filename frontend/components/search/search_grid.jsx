import React from 'react';
import Geosuggest from 'react-geosuggest';
import { Link, withRouter } from 'react-router-dom';

class SearchGrid extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      spot: ''
    };
    this.onSuggestSelect = this.onSuggestSelect.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e });
  }

  onSuggestSelect(suggest) {
    if (suggest && suggest.placeId) {
      this.setState( { spot: '' } );
      this.props.history.replace({
        pathname: '/search',
        search: `lat=${suggest.location.lat}&lng=${suggest.location.lng}`
      });
    }
  }


  render() {
    return (
      <span className="search-box">
        <Geosuggest
          className="search-input"
          placeholder="Try Fargo"
          id="top-bar"
          onSuggestSelect={this.onSuggestSelect}
          onChange={this.update('spot')}
        />
      </span>
    );

  }
}

export default withRouter(SearchGrid);
