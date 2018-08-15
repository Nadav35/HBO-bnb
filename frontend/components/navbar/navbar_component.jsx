import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import SearchGrid from '../search/search_grid';

class NavbarComponent extends React.Component {
    constructor(props){
      super(props);
      this.loginDemoUser = this.loginDemoUser.bind(this);
      this.logoutUser = this.logoutUser.bind(this);
    }

    loginDemoUser(e){
      e.preventDefault();
      const user = {username: "Al Swearengen", password: "123456"};
      this.props.loginDemoUser(user);
    }

    logoutUser(e) {
      e.preventDefault();
      this.props.logout()
        .then(this.props.history.push('/'));
    }



    render() {
      const leftNav = () => (
        <nav className="left-nav">
          <Link to="/"><img src={window.logo}
            alt="logo" /></Link>
          <div className="geo-search">
            <i className="fas fa-search"></i>
            <SearchGrid />
          </div>

        </nav>
      );

      const rightNavNotLogged = () => (
        <nav className="right-nav">
          <ul>
            <li><button onClick={this.loginDemoUser}>Demo</button></li>
            <li><button>Do stuff</button></li>
            <li><button onClick={() => this.props.openModal('signup')}>Sign Up</button></li>
            <li><button onClick={() => this.props.openModal('login')}>Log In</button></li>
          </ul>

        </nav>
      );

      const rightNavLogged = () => (
        <nav className="right-nav">
          <ul>
            <Link to={`/api/bookings/${this.props.currentUser.id}`}>
              <li><button>My trips</button></li>
            </Link>
            <li><button onClick={() => this.props.openModal('create_listing')}>Become a host</button></li>
            <li><button>Earn Credit</button></li>
            <li><button className="switch-button" onClick={this.logoutUser}>Log Out</button></li>
            <img src={this.props.currentUser.imgUrl}></img>
          </ul>
        </nav>
      );

      const Greeting = () => (
        this.props.currentUser ? rightNavLogged() : rightNavNotLogged()
      );


      return (

        <div className="main-nav">
          {leftNav()}
          {Greeting()}

        </div>
      );
    }

}

export default withRouter(NavbarComponent);
