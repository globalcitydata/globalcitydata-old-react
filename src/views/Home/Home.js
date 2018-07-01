import React from 'react';
import PropTypes from 'prop-types';

// Sections
import DataList from './Sections/DataList';
import Purpose from './Sections/Purpose';
import Showcase from './Sections/Showcase';

function Home(props) {
  const { dataList, updateDataList } = props;
  return (
    <div>
      <Showcase />
      <Purpose />
      <DataList dataList={dataList} />
    </div>
  );
}

export default Home;
