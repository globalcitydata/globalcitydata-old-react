import React from 'react';

// Prop Types
import { func, arrayOf } from 'prop-types';
import { dataType } from '../../../utils/data';

// Views
import SearchBar from './SearchBar';
import QueryBar from './QueryBar';

function Showcase(props) {
  const { dataList, scroll, updateDataList } = props;
  return (
    <div className="showcase">
      <div className="bg-image" />
      <div className="container-fluid content-wrap">
        <h1>Global City Data</h1>
        <hr></hr>
        <p>
            A collaborative platform showcasing diverse urban datasets that assess multiple sustainability
            outcomes in cities: economy, environment, health, equity, wellbeing and livability. Contributed 
            by researchers from across the world, these peer-reviewed datasets are organized at three scales: 
            intra­urban data, aggregate data/metrics for individual cities, and, across all urban areas in a nation.
        </p>
        <hr></hr>
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
