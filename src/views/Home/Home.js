import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-materialize';

// CSS
import './Home.css';

// Sections
import DataList from './Sections/DataList';
import Purpose from './Sections/Purpose';
import Showcase from './Sections/Showcase';

function Home(props) {
  const { dataList, updateDataList } = props;
  return (
    <div className="home">
      <Showcase />
      <Purpose />
      <DataList dataList={dataList} />
    </div>
  );
}

export default Home;
