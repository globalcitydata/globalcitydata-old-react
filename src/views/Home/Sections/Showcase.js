import React from 'react';

// Prop Types
import { func, arrayOf } from 'prop-types';
import { dataType } from '../../../utils/data';

// Views
import SearchBar from './SearchBar';
import QueryBar from './QueryBar';

function Showcase(props) {
  const { dataList, updateDataList } = props;
  return (
    <div className="showcase">
      <div className="bg-image" />
      <div className="container-fluid content-wrap">
        <h1>Global City Data</h1>
        <SearchBar dataList={dataList} updateDataList={updateDataList} />
        <br />
        <QueryBar dataList={dataList} updateDataList={updateDataList} />
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
