import React from 'react';
import { arrayOf, object, func, bool } from 'prop-types';
// import dataType from '../../utils/props';

// CSS
import './Home.css';

// Sections
import DataList from './Sections/DataList';
import Purpose from './Sections/Purpose';
import Showcase from './Sections/Showcase';

function Home(props) {
  const { dataList, updateDataList, showPurpose } = props;
  return (
    <div className="home">
      <Showcase dataList={dataList} updateDataList={updateDataList} />
      {showPurpose && <Purpose />}
      <DataList dataList={dataList} />
    </div>
  );
}

export default Home;

Home.propTypes = {
  dataList: arrayOf(object),
  updateDataList: func.isRequired,
  showPurpose: bool.isRequired,
};

Home.defaultProps = {
  dataList: null,
};
