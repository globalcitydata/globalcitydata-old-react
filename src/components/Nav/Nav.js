import React from 'react';
import { NavLink } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { NavBar } from 'react-materialize';

// CSS
import './Nav.css';

function Nav() {
  return (
    <header>
      {/* <NavBar brand="Global City Data" right> */}
      <ul>
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/collaborators">
            Collaborators
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/publications">
            Publications
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="active" to="/submit-data">
            Submit Data
          </NavLink>
        </li>
      </ul>
      {/* </NavBar> */}
    </header>
  );
}

export default Nav;
