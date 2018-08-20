import React from 'react';
import { Link } from 'react-router-dom';
import './NoMatch.css';

const NoMatch = () => (
  <div className="error-page">
    <div>
      <h1 data-h1="404">404</h1>
      <Link to="/">
        <p data-p="NOT FOUND">Wanna come back home?</p>
      </Link>
    </div>
  </div>
);

export default NoMatch;
