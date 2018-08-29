import React from 'react';
import { NavLink } from 'react-router-dom'; // eslint-disable-line no-unused-vars
import { Navbar } from 'react-materialize';

// CSS
import './Nav.css';

class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Navbar
            brand="Global City Data"
            right
            options={{ closeOnClick: true }}
            className="nav blue"
          >
            <li>
              <NavLink
                exact
                activeClassName="active"
                onClick={this.forceUpdate}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/collaborators">
                Our Story 
              </NavLink>
            </li>
            <li>
              <NavLink exact activeClassName="active" to="/publications">
                Publications
              </NavLink>
            </li>
            <li>
              <a
                target="_blank"
                href="https://medium.com/@globalcitydata"
                rel="noopener noreferrer"
              >
                Blog
              </a>
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
        </div>
      </nav>
    );
  }
}

export default Nav;
