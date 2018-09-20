import React from 'react';

const SpotsHeader = () => (
  <div className="header-transitions">
    <header className="spots-header">

      <div className="photo left-photo">
        <img src={window.tv} />
        <h1>Do you love TV shows?</h1>
        <h2>Do you also need a vaction?</h2>
      </div>

      <div className="photo right-photo">
        <img src={window.vacation}></img>
        <h1>Welcome to HBO-BnB</h1>
        <h2>Vacation at your favorite HBO shows locations</h2>
      </div>
    </header>
    <div className="homes-title">
      <h1>Homes around the world</h1>
    </div>
  </div>
);

export default SpotsHeader;
