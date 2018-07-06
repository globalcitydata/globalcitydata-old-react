import React from 'react';

import SearchBar from './SearchBar';
import QueryBar from './QueryBar';

function Showcase() {
  return (
    <div className="showcase">
      <div className="bg-image"></div>
        <div className="container content-wrap">
          <h1>Global City Data</h1>
          <SearchBar />
          <br />
          <QueryBar />
        </div>
    </div>
  );
}

export default Showcase;
