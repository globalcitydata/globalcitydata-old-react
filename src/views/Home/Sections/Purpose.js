import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Carousel } from 'react-materialize';
import Veggies from '../../../img/Veggies.jpg'
import Street from '../../../img/Street.jpg'
import People from '../../../img/People.jpg'
import Building from '../../../img/Building.jpg'

// need for <a> outside button
import { scroll } from '../../../utils/scroll'; // eslint-disable-line

function Purpose() {
  return (
    <section className="purpose">
      <div className="container content-wrap">
        <Carousel options={{ indicators: true, fullWidth: true }} images={[
          Veggies,
          Veggies,
          Veggies,
          Veggies,
          Veggies 
        ]} />      
      </div>
    </section>
  );
}

export default Purpose;
