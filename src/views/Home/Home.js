import React from 'react';
import { arrayOf, func, bool } from 'prop-types';
import { dataType } from '../../utils/data';

// CSS
import './Home.css';

// Sections
import DataList from './Sections/DataList';
import Purpose from './Sections/Purpose';
import Showcase from './Sections/Showcase';

function Home(props) {
  const { dataList, fullDataList, updateDataList, showPurpose } = props;

  return (
    <div className="home">
      <Showcase dataList={fullDataList} updateDataList={updateDataList} />
      {showPurpose && <Purpose />}
      <DataList dataList={dataList} />
    </div>
  );
}

export default Home;

Home.propTypes = {
  dataList: arrayOf(dataType),
  fullDataList: arrayOf(dataType),
  updateDataList: func.isRequired,
  showPurpose: bool.isRequired,
};

Home.defaultProps = {
  dataList: null,
  fullDataList: null,
};
