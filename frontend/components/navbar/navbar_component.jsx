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
      const user = {username: "guest", password: "123456"};
      this.props.loginDemoUser(user);
    }



    render() {
      const leftNav = () => (
        <nav className="left-nav">
          <Link to="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt4I84agutwgKwfb0AMMW4OrwGvlDibEmaL3hziPndtK1Wk6LwMQ"
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
            <li><button>My trips</button></li>
            <li><button onClick={() => this.props.openModal('create_listing')}>Become a host</button></li>
            <li><button>Earn Credit</button></li>
            <li><button className="switch-button" onClick={this.props.logout}>Log Out</button></li>
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
