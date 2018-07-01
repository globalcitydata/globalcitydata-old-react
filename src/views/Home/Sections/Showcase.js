import React from 'react';

import SearchBar from './SearchBar';
import QueryBar from './QueryBar';

function Showcase() {
  return (
    <div className="showcase">
      <div className="">
        <div className="container">
          <h1>Global City Data</h1>
          <SearchBar />
          <br />
          <QueryBar />
        </div>
      </div>
    </div>
  );
}

export default Showcase;
