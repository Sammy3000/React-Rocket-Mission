import React from 'react';
import styles from '../styles/Header.module.css';
import planetImg from '../assets/planet.png';
import Navbar from './Navbar';

const Header = () => (
  <header>
    <div className={styles.navHeader}>
      <div className={styles.logoContainer}>
        <img
          src={planetImg}
          alt="planet logo"
          className="logo"
          width="70"
          height="70"
        />
        <h2>Space Travelers Hub</h2>
      </div>
      <Navbar />
    </div>
    <hr />
  </header>
);

export default Header;
