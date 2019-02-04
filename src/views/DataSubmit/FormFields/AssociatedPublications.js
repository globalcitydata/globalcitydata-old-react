import React, { Fragment } from 'react';
import { Input } from 'react-materialize';
import { string, func, shape } from 'prop-types';

// TODO: Figure out how to dynamically add author fields

const PublicationsGroup = ({ publication, url, f }) => (
  <Fragment>
    <Input
      s={12}
      name="publication"
      label="Associated Publication"
      value={publication}
      onChange={f}
      required
    />
    <Input
      s={12}
      name="url"
      label="Relevant URL"
      value={url}
      onChange={f}
      required
    />
  </Fragment>
);

export const AssociatedPublications = ({ publications, f }) => (
  <Fragment>
    {publications.map(pub => {
      const { publication, url } = pub;
      return <PublicationsGroup publication={publication} url={url} f={f} />;
    })}
  </Fragment>
);

PublicationsGroup.propTypes = {
  publication: string.isRequired,
  url: string.isRequired,
  f: func.isRequired,
};

AssociatedPublications.propTypes = {
  publications: shape({
    publication: string.isRequired,
    url: string.isRequired,
  }).isRequired,
  f: func.isRequired,
};
