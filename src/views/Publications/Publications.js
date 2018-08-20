import React, { Component } from 'react';
import { Router, Link } from 'react-router-dom';
import { objectOf, string } from 'prop-types';
import { Preloader, Card, Row, Col, Button } from 'react-materialize';
import { scroll } from '../../utils/scroll';

// CSS
import './Publications.css';

// Sections
import Search from './Sections/Search';

const PubDetail = ({ pub }) => {
  const [value, url] = pub;
  const realURL = `/data/${url}`;
  return (
    <Col s={12} m={6} xl={4}>
      <Card
        className="z-depth-4"
        actions={[
          <Link to={realURL} key={value}>
            <Button waves="light">Relevant Data</Button>
          </Link>,
        ]}
        // title={url.split('-').join(' ')}
      >
        <p>{value}</p>
      </Card>
    </Col>
  );
};

const PubList = ({ publications }) => (
  <Row>
    <div id="pubList">
      {!publications ? (
        <div className="center">
          <Preloader flashing />
        </div>
      ) : (
        <div>
          {Object.keys(publications).length === 0 ? (
            <p>There are no publications matching your query.</p>
          ) : (
            <div>
              {Object.entries(publications).map((pub, i) => (
                <PubDetail key={i} pub={pub} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  </Row>
);

class Publications extends Component {
  state = { publications: this.props.publications }; // eslint-disable-line

  componentWillReceiveProps(nextProps) {
    const { publications } = nextProps;
    this.setState({ publications });
  }

  updatePublications = publications => {
    this.setState({ publications });
    const anchor = document.querySelector('#pubList');
    scroll.animateScroll(anchor);
  };

  render() {
    const { publications } = this.props;
    const { publications: shownPublications } = this.state;
    return (
      <section className="publications">
        <div className="container">
          <h1>Publications</h1>
          <Search pubs={publications} updatePubs={this.updatePublications} />
          <PubList publications={shownPublications} />
        </div>
      </section>
    );
  }
}

export default Publications;

PubList.propTypes = {
  publications: objectOf(string),
};

PubList.defaultProps = {
  publications: null,
};
