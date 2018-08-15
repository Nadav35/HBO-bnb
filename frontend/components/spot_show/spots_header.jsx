import React from 'react';

const SpotsHeader = () => (
  <div className="header-transitions">
    <header className="spots-header">

      <div className="photo left-photo">
        <img src={window.tv} />;
      </div>

      <div className="photo right-photo">
        <img src={window.vacation}></img>
      </div>
    </header>
    <div className="mid-trans">
      <div className="left-trans">
        <h1>Do you love TV shows?</h1>
        <h2>Do you also need a vaction?</h2>
      </div>
      <div className="right-trans">
        <h1>Welcome to HBO-BnB</h1>
        <h2>Vacation at your favorite HBO</h2><br/>
        <h2>shows locations</h2>
      </div>

    </div>
  </div>
);

export default SpotsHeader;
