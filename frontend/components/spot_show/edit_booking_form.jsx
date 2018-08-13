import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class EditBookingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      lng: '',
      lat: '',
      location: '',
      price: '',
      photoFile: null,
      photoUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  render() {
    return (
      <h1>hey</h1>
    );
  }
}

export default EditBookingForm;
