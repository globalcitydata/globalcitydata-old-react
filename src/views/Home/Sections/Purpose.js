import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'; // eslint-disable-line no-unused-vars

function Purpose() {
  return (
    <section id="purpose" className="section">
      <div className="container">
        <h2>Our Purpose</h2>
        <p>
          Global City Data hosts descriptions of open access urban systems data
          sets and models collected and vetted by a network of international
          researchers. To learn more about the data sets and models featured on
          this site, please use the contact link at the bottom of each detail
          page to be put in contact with the owners of individual data sets and
          models.
        </p>
        <p>
          Interested in contributing to Global City Data? Learn more{' '}
          <Link to="/collaborators">here.</Link>
        </p>
      </div>
    </section>
  );
}

export default Purpose;
