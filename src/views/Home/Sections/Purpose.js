import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Button, Carousel } from 'react-materialize';
import Veggies from '../../../img/Veggies.jpg'
import Street from '../../../img/Street.jpg'
import People from '../../../img/People.jpg'
import Building from '../../../img/Building.jpg'

// need for <a> outside button
import { scroll } from '../../../utils/scroll'; // eslint-disable-line

function Purpose() {
  return (
      <section className="purpose">
      {/* <div className="container content-wrap">
        <Carousel options={{ indicators: true }} images={[
          Veggies,
          Veggies,
          Street
        ]} />      
      </div> */}
    </section> 

  );
}

export default Purpose;
