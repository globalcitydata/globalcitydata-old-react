import React from 'react';
import { NavLink } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { Navbar } from 'react-materialize';

function Nav() {
  return (
    <header>
      <Navbar brand="Global City Data" right className="nav blue">
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
      </Navbar>
    </header>
  );
}

export default Nav;
