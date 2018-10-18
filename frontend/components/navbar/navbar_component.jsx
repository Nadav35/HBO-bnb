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
            alt="logo" />
          </Link>
          <div className="search-grid">
            <SearchGrid />
          </div>
        </nav>
      );

      const rightNavNotLogged = () => (
        <nav className="right-nav">
          <ul className="right-not-logged">
            <li><button onClick={this.loginDemoUser}>Demo</button></li>
            <li><button onClick={() => this.props.openModal('signup')}>Sign up</button></li>
            <li><button onClick={() => this.props.openModal('login')}>Log in</button></li>
          </ul>

        </nav>
      );

      const rightNavLogged = () => (
        <nav className="right-nav">
          <ul className="right-logged">
            <Link to={`/api/bookings/${this.props.currentUser.id}`}>
              <li><button>My trips</button></li>
            </Link>
            <li><button onClick={() => this.props.openModal('create_listing')}>Become a host</button></li>
            <li><button className="switch-button" onClick={this.logoutUser}>Log Out</button></li>
            <li>
              <img src={this.props.currentUser.imgUrl}></img>
              <p>Hello, {this.props.currentUser.username}</p>
            </li>
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
