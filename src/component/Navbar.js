import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <div>
      <nav className={styles.navLinks}>
        <NavLink
          className={styles.navLink}
          to="/rockets"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Rockets
        </NavLink>

        <NavLink
          className={styles.navLink}
          to="/missions"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          Missions
        </NavLink>

        <NavLink
          className={styles.navLink}
          to="/"
          style={({ isActive }) => ({
            textDecoration: isActive ? 'underline' : 'none',
          })}
        >
          My Profile
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
