import React from 'react';
import { Link } from 'react-router-dom';
import SearchGrid from '../search/search_grid';

class NavbarComponent extends React.Component {
    constructor(props){
      super(props);
      this.addForm = this.addForm.bind(this);
    }

    addForm(e) {
      e.preventDefault();
      let item = document.getElementById('modal');
      item.classList.add("is-open");

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
            <li><Link to="/">Demo</Link></li>
            <li><Link to="/">Become a host</Link></li>
            <li><Link to="/">Earn Credit</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">Log In</Link></li>
          </ul>

        </nav>
      );
      return (
        <div className="main-nav">
          {leftNav()}
          {rightNavNotLogged()}

        </div>
      );
    }


}

export default NavbarComponent;
