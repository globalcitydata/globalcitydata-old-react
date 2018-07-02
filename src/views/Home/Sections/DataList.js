import React from 'react';
import { Row, Col, Card, Button } from 'react-materialize';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function DataCard(props) {
  const { data } = props;
  return (
    <Card className='' textClassName='' title={data.name} actions={[<Link to='#'><Button waves="light">Detail</Button></Link>]}>
      <p>I am a very simple card. I am good at containing small bits of information</p>
    </Card>
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
