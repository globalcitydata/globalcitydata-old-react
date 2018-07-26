import React, { Component } from 'react';
import { arrayOf, object } from 'prop-types';
import { fetchPublications } from '../../utils/api';

const PublicationsList = ({ publications }) => (
  <ul>
    {publications && publications.map(pub => {
      const { title } = pub;
      return <li key={title}>{title}</li>;
    })}
  </ul>
);

class Publications extends Component {
  state = {
    publications: null,
  };

  async componentDidMount() {
    const publications = await fetchPublications();
    this.setState({ publications });
  }

  render() {
    const { publications } = this.state;
    return (
      <section className="publications">
        <div className="container">
          <h1>Publications</h1>
          <PublicationsList publications={publications} />
        </div>
      </section>
    );
  }
}

export default Publications;

PublicationsList.propTypes = {
  publications: arrayOf(object),
};

PublicationsList.defaultProps = {
  publications: null,
};
