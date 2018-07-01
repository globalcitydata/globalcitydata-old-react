import React from 'react';
import PropTypes from 'prop-types';

// Sections
import DataList from './Sections/DataList';
import Purpose from './Sections/Purpose';

function Home(props) {
  const { dataList, updateDataList } = props;
  return (
    <div>
      <p>Hello World! I'm home.</p>
      <Purpose />
      <DataList dataList={dataList} />
    </div>
  );
}

export default Home;
