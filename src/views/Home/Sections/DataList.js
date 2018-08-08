import React from 'react';
import { Row, Col, Card, Button, Preloader } from 'react-materialize';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const DataCard = props => {
  const { data } = props;
  const url = `data/${data.url}`;
  const description = `${data.description.slice(0, 300)}...`;
  return (
    <Card
      className="z-depth-4"
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
    <section className="dataList" id="dataList">
      <div className="container content-wrap">
        <h2>Datasets and Models</h2>

        {!dataList ? (
          <div className="center">
            <Preloader flashing />
          </div>
        ) : (
          <div>
            {dataList.length === 0 ? (
              <p>There is no data matching your query :(</p>
            ) : (
              <Row>
                {dataList.map(data => (
                  <Col key={data.title} s={12} m={6} xl={4}>
                    <DataCard data={data} />
                  </Col>
                ))}
              </Row>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default DataList;
