import React from 'react';
import { Router, Link } from 'react-router-dom';
import { Button } from 'react-materialize';

function Purpose() {
  return (
    <section className="purpose">
      <div className="container content-wrap">
        <h2>Our Purpose</h2>
        <p>Global City Data hosts descriptions of open access urban systems data sets and models collected and vetted by
        a network of international researchers. To learn more about the data sets and models featured on
        this site, please use the contact link at the bottom of each detail page to be put in contact with the
              owners of individual data sets and models.</p>
        <p>Interested in contributing to Global City Data? Learn more <Link to="/collaborators">here.</Link></p>
        <a data-scroll href="#dataList"><Button className="blue-grey darken-4">Datasets, models and tutorials</Button></a>
      </div>
    </section>
  );
}

export default Purpose;
