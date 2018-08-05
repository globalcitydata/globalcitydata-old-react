import React from 'react';
import { Row, Col, Card, Button, Preloader } from 'react-materialize';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DataCard = props => {
  const { data } = props;
  const url = `data/${data.url}`;
  const description = `${data.description.slice(0, 400)}...`;
  return (
    <Card
      className="z-depth-4"
      textClassName=""
      title={data.title}
      actions={[
        <Link to={url} key={data.url}>
          <Button waves="light">Detail</Button>
        </Link>,
      ]}
    >
      <p>{description}</p>
    </Card>
  );
};

const DataList = props => {
  const { dataList } = props;
  return (
    <div>
      {!dataList ? (
        <div>
          <p style={{ paddingBottom: 25 }}>Loading data...</p>
          <Preloader flashing />
        </div>
      ) : (
        <section className="dataList" id="dataList">
          <div className="container content-wrap">
            <h2>Datasets and Models</h2>
            {dataList.length === 0 ? (
              <p>There is no data matching your query :(</p>
            ) : (
              <ul className="dataListCards">
                <Row className="flex">
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
      )}
    </div>
  );
};

export default DataList;
