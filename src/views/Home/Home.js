import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './Home.css';

// Sections
import DataList from './Sections/DataList';
import Purpose from './Sections/Purpose';
import Showcase from './Sections/Showcase';

function Home(props) {
  const { dataList } = props;
  return (
    <div className="home">
      <Showcase />
      <Purpose />
      <DataList dataList={dataList} />
    </div>
  );
}

export default Home;
