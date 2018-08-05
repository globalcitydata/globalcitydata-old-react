import React from 'react';
import { Router, Link } from 'react-router-dom';
import { objectOf, string } from 'prop-types';
import { Preloader, Card, Row, Col, Button } from 'react-materialize';

const PubDetail = ({ pub }) => {
  const [value, url] = pub;
  const realURL = `/data/${url}`;
  return (
    <Col s={12} m={6} xl={4}>
      <Card
        className="z-depth-4"
        actions={[
          <Link to={realURL} key={value}>
            <Button waves="light">This is a Link</Button>
          </Link>,
        ]}
      >
        <p>{value}</p>
      </Card>
    </Col>
  );
};

const PubList = ({ publications }) => (
  <Row className="flex">
    {!publications ? (
      <div>
        <p style={{ paddingBottom: 25 }}>Loading publications...</p>
        <Preloader flashing />
      </div>
    ) : (
      Object.entries(publications).map((pub, i) => <PubDetail key={i} pub={pub} />)
    )}
  </Row>
);

const Publications = ({ publications }) => (
  <section className="publications">
    <div className="container">
      <h1>Publications</h1>
      <PubList publications={publications} />
    </div>
  </section>
);

export default Publications;

PubList.propTypes = {
  publications: objectOf(string),
};

PubList.defaultProps = {
  publications: null,
};
