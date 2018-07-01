import React from 'react';
import PropTypes from 'prop-types';

function DataCard(props) {
  const { data } = props;
  return (
    <div className="dataCard">
      <h4>I'm a datacard</h4>
      <p>Data Title: {data.name}</p>
    </div>
  );
}

function DataList(props) {
  const { dataList } = props;
  // const dataList = [{ name: 'test 1' }, { name: 'test 2' }];
  return (
    <div className="dataList">
      <h1>Datasets and Models</h1>
      {!dataList ? (
        <p>Loading</p>
      ) : (
        <ul className="dataListCards">
          {dataList.map(data => (
            <li key={data.name}>
              <DataCard data={data} />
            </li>
          ))}
        </ul>
      )
      // <div>p</div>
      }
    </div>
  );
}

export default DataList;
