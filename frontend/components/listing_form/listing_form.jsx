import React from 'react';
import { withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class ListingForm extends React.Component {
  constructor(props) {
    super(props);
    if (props.spot) {
      this.state = {
        title: '',
        description: '',
        lng: '',
        lat: '',
        location: '',
        photoFile: null,
        photoUrl: null,
        owner_id: props.spot.ownerId,
        price: ''
      };
    } else {
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
      }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  componentDidMount(){
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    // const spot = merge({}, this.state);
    // this.props.createSpot(spot).then(this.props.closeModal);
    const formData = new FormData();
    formData.append('spot[title]', this.state.title);
    formData.append('spot[description]', this.state.description);
    formData.append('spot[lng]', this.state.lng);
    formData.append('spot[lat]', this.state.lat);
    formData.append('spot[location]', this.state.location);
    formData.append('spot[price]', this.state.price);
    if (this.state.photoFile) {
      formData.append('spot[photo]', this.state.photoFile);
    }
    if (this.props.spotId) {
      this.props.processForm(this.props.spotId, formData).then(this.props.closeModal);
    } else {
      this.props.processForm(formData).then(this.props.closeModal);
    }
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {

      this.setState({photoFile: file, photoUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }


  getErrors() {
    return (
      <ul className="session-errors">
        {this.props.errors.map((error, idx ) => (
          <li key = {`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="new-listing-container">
        <form className="listing-form-box" onSubmit={this.handleSubmit}>
          <i className="fas fa-window-close"
            onClick={this.props.closeModal}>
          </i>
          {this.getErrors()}
          <h1>{this.props.formType} Listing</h1>
          <div className="input title">
            <input value={this.state.title}
              onChange={this.update('title')}
              placeholder="Enter a title">
            </input>
            <i className="fas fa-edit"></i>

          </div>
          <div className="input description">
            <textarea
              cols="15"
              rows="2"
              value={this.state.description}
              onChange={this.update('description')}
              placeholder="Give a brief description"
            />
          <i className="fas fa-pencil-alt"></i>

          </div>
          <div className="input lng">
            <input value={this.state.lng}
              onChange={this.update('lng')}
              placeholder="enter longitude">
            </input>
            <i className="fas fa-atlas"></i>

          </div>
          <div className="input lat">
            <input value={this.state.lat}
              onChange={this.update('lat')}
              placeholder="enter latitude">
            </input>
            <i className="fas fa-atlas"></i>

          </div>
          <div className="input location">
            <input value={this.state.location}
              onChange={this.update('location')}
              placeholder="Enter your city">
            </input>
            <i className="fas fa-building"></i>

          </div>
          <div className="input price">
            <input value={this.state.price}
              onChange={this.update('price')}
              placeholder="How much per night??">
            </input>
            <i className="fas fa-money-check-alt"></i>

          </div>

          <div className="input listing-photo">
            <input type="file"
              onChange={this.handleFile}>
            </input>
            <i className="fas fa-camera"></i>

          </div>

          <div className="form-submit">
            <button className="submit-button">submit</button>

          </div>

        </form>


      </div>
    );
  }
}

export default withRouter(ListingForm);
