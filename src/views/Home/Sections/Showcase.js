import React from 'react';

import SearchBar from './SearchBar';
import QueryBar from './QueryBar';

function Showcase(props) {
  const { dataList, updateDataList } = props;
  return (
    <div className="showcase">
      <div className="bg-image" />
      <div className="container content-wrap">
        <h1>Global City Data</h1>
        <SearchBar />
        <br />
        <QueryBar dataList={dataList} updateDataList={updateDataList} />
      </div>
    </div>
  );
}

export default Showcase;
