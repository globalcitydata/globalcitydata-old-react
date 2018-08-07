import React from 'react';
import { arrayOf, func, bool, object } from 'prop-types';
import { dataType } from '../../utils/data';

// CSS
import './Home.css';

// Sections
import DataList from './Sections/DataList';
import Purpose from './Sections/Purpose';
import Showcase from './Sections/Showcase';

function Home(props) {
  const { dataList, fullDataList, updateDataList, showPurpose, scroll } = props;

  return (
    <div className="home">
      <Showcase
        dataList={fullDataList}
        updateDataList={updateDataList}
        scroll={scroll}
      />
      {showPurpose && <Purpose scroll={scroll} />}
      <DataList dataList={dataList} scroll={scroll} />
    </div>
  );
}

export default Home;

Home.propTypes = {
  dataList: arrayOf(dataType),
  fullDataList: arrayOf(dataType),
  updateDataList: func.isRequired,
  scroll: object.isRequired, // eslint-disable-line
  showPurpose: bool.isRequired,
};

Home.defaultProps = {
  dataList: null,
  fullDataList: null,
};
