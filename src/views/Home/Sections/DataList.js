import React from 'react';
import { Row, Col, Card } from 'react-materialize';
import PropTypes from 'prop-types';

function DataCard(props) {
  const { data } = props;
  return (
    <div className="dataCard">
      <Card className='' textClassName='' title={data.name} actions={[<a href='#'>This is a link</a>]}>
        <p>I am a very simple card. I am good at containing small bits of information</p>
      </Card>
    </div>
  );
}

function DataList(props) {
  const { dataList } = props;
  // const dataList = [{ name: 'test 1' }, { name: 'test 2' }];
  return (
    <section className="dataList">
      <div className="container">
        <h2>Datasets and Models</h2>
        {!dataList ? (
          <p>Loading</p>
        ) : (
            <ul className="dataListCards">
              <Row>
                {dataList.map(data => (
                  <Col s={12} m={6} xl={4}><li key={data.name}>
                    <DataCard data={data} />
                  </li></Col>
                ))}
              </Row>
            </ul>
          )
        }
      </div>
    </section>
  );
}

export default DataList;
