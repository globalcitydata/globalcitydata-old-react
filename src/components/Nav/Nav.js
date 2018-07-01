import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import './Nav.css';

function Nav() {
  return (
    <header>
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
      </ul>
    </header>
  );
}

export default Nav;
