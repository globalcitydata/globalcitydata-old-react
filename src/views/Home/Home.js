import React from 'react';
import PropTypes from 'prop-types';
// import dataType from '../../utils/props';

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
      {showPurpose && <Purpose />}
      <DataList dataList={shownDataList} />
    </div>
  );
}

export default Home;

Home.propTypes = {
  updateDataList: PropTypes.func.isRequired,
  showPurpose: PropTypes.bool.isRequired,
};
