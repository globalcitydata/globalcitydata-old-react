import React from 'react';
import { Button, Modal, Icon, Carousel } from 'react-materialize';

// Prop Types
import { func, arrayOf } from 'prop-types';
import { dataType } from '../../../utils/data';

//Css
import './Sections.css';

// Views
import SearchBar from './SearchBar';
import QueryBar from './QueryBar';
import Veggies from '../../../img/Veggies.jpg'
import Street from '../../../img/Street.jpg'
import People from '../../../img/People.jpg'
import Building from '../../../img/Building.jpg'

function Showcase(props) {
  const { dataList, scroll, updateDataList } = props;
  return (
    <div className="showcase">
      <div className="bg-image" />
      <div className="container-fluid content-wrap">
        <h1>Global City Data</h1>
        
        <hr className="homeHR"></hr>

        <h7>
            A collaborative platform showcasing diverse urban datasets that assess multiple sustainability
            outcomes in cities: economy, environment, health, equity, wellbeing and livability.<br></br> Contributed 
            by researchers from across the world, these peer-reviewed datasets are organized at three scales: 
            intra­urban data, aggregate data/metrics for individual cities, and, across <br></br> all urban areas in a nation.
        </h7>

        <hr className="homeHR"></hr>

        <SearchBar
          dataList={dataList}
          scroll={scroll}
          updateDataList={updateDataList}
        />
        <br />
        <QueryBar
          dataList={dataList}
          scroll={scroll}
          updateDataList={updateDataList}
        />
          <Modal trigger={<Button className="right"><Icon>help</Icon></Button>}>
            <h1 className="center">Glossary</h1>
            <hr id="glossaryHR"></hr>
            <ul>
              <li>
                <h6>Category</h6>
              </li>
              <ul>
                <li><strong>Example</strong> - Definition of example.</li>
              </ul>
            </ul>
          </Modal>
      </div>
    </div>
  );
}

export default Showcase;

Showcase.propTypes = {
  dataList: arrayOf(dataType),
  updateDataList: func.isRequired,
};

Showcase.defaultProps = {
  dataList: null,
};
