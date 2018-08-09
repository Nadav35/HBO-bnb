import React from 'react';
import { Link } from 'react-router-dom';
import SearchGrid from '../search/search_grid';

class NavbarComponent extends React.Component {
    constructor(props){
      super(props);
      this.loginDemoUser = this.loginDemoUser.bind(this);
    }

    loginDemoUser(e){
      e.preventDefault();
      const user = {username: "Guest", password: "123456"};
      this.props.loginDemoUser(user);
    }



    render() {
      const leftNav = () => (
        <nav className="left-nav">
          <Link to="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt4I84agutwgKwfb0AMMW4OrwGvlDibEmaL3hziPndtK1Wk6LwMQ"
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
            <li><Link to="/" onClick={this.loginDemoUser}>Demo</Link></li>
            <li><Link to="/">Do stuff</Link></li>
            <li><Link onClick={this.props.clearErrors} to="/signup">Sign Up</Link></li>
            <li><Link onClick={this.props.clearErrors} to="/login">Log In</Link></li>
          </ul>

        </nav>
      );

      const rightNavLogged = () => (
        <nav className="right-nav">
          <hgroup className="header-group">
            <h2 className="header-name">Hi, {this.props.currentUser.username}</h2>
          </hgroup>
          <ul>
            <li><Link to="/">My trips</Link></li>
            <li><Link to="/">Become a host</Link></li>
            <li><Link to="/">Earn Credit</Link></li>
            <li><Link to="/" onClick={this.props.logout}>Log Out</Link></li>
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

export default NavbarComponent;
