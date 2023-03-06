import './styles/Nav.css';
import React from 'react';
import planetImg from '../assets/planet.png';

const Nav = () => (
  <header>
    <div className="nav-header">
      <div className="logo-container">
        <img
          src={planetImg}
          alt="planet logo"
          className="logo"
          width="50"
          height="50"
        />
        <h2>Space Travelers Hub</h2>
      </div>
    </div>
    <hr />
  </header>
);

export default Nav;
