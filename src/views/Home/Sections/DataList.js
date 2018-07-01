import React from 'react';
import PropTypes from 'prop-types';

function DataCard(props) {
  const { data } = props;
  return (
    <div className="dataCard">
      <h4>I'm a datacard</h4>
      <p>Data Title: {data.id}</p>
    </div>
  );
}

function DataList(props) {
  const { dataList } = props;
  // const dataList = [{ name: 'test 1' }, { name: 'test 2' }];
  return (
    <div className="dataList">
      {!dataList ? <p>Loading</p> :
        // <div>
        //   <h1>Datasets and Models</h1>
        //   <ul className="dataList">
        //     {dataList.map(data => (
        //       <li>
        //         <DataCard data={data} />
        //       </li>
        //     ))}
        //   </ul>
        // </div>
        <div>p</div>
      }
    </div>
  );
}

export default DataList;
