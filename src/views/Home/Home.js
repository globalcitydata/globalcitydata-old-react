import React from 'react';
import PropTypes from 'prop-types';

// CSS
import './Home.css';

// Sections
import DataList from './Sections/DataList';
import Purpose from './Sections/Purpose';
import Showcase from './Sections/Showcase';

function Home(props) {
  const { dataList, shownDataList, updateDataList, showPurpose } = props;
  return (
    <div className="home">
      <Showcase dataList={dataList} updateDataList={updateDataList} />
      {showPurpose ? (
        <div>
          <Purpose />
          <DataList dataList={shownDataList} />
        </div>
      ) :
        <DataList dataList={shownDataList} />
      }
    </div>
  );
}

export default Home;
