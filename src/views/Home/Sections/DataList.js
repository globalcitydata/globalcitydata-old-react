import React from 'react';
import { Row, Col, Card, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function DataCard(props) {
  const { data } = props;
  return (
    <Card
      className="w3-spin"
      textClassName=""
      title={data.title}
      actions={[
        <Link to="#" key={data.title}>
          <Button waves="light">Detail</Button>
        </Link>
      ]}
    >
      <p>{data.description}</p>
    </Card>
  );
}

function DataList(props) {
  const { dataList } = props;
  // const dataList = [{ name: 'test 1' }, { name: 'test 2' }];
  return (
    <section className="dataList">
      <div className="container content-wrap">
        <h2>Datasets and Models</h2>
        {!dataList ? (
          <p>Loading</p>
        ) : (
          <ul className="dataListCards">
            <Row>
              {dataList.map(data => (
                <Col key={data.title} s={12} m={6} xl={4}>
                  <li>
                    <DataCard data={data} />
                  </li>
                </Col>
              ))}
            </Row>
          </ul>
        )}
      </div>
    </section>
  );
}

export default DataList;
