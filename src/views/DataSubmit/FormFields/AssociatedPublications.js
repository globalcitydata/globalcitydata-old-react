import React, { Fragment } from 'react';
import { Input } from 'react-materialize';
import { string, func, shape, arrayOf } from 'prop-types';

// TODO: Figure out how to dynamically add author fields

const PublicationsGroup = ({ publication, url, f }) => (
  <Fragment>
    <Input
      s={12}
      name="publication"
      label="Associated Publication"
      value={publication}
      onChange={f}
    />
    <Input s={12} name="url" label="Relevant URL" value={url} onChange={f} />
  </Fragment>
);

export const AssociatedPublications = ({ val: publications, f }) => (
  <Fragment>
    {publications.map(({ publication, url }) => (
      <PublicationsGroup
        publication={publication}
        url={url}
        f={f}
        key={publication}
      />
    ))}
  </Fragment>
);

PublicationsGroup.propTypes = {
  publication: string.isRequired,
  url: string.isRequired,
  f: func.isRequired,
};

AssociatedPublications.propTypes = {
  val: arrayOf(
    shape({
      publication: string.isRequired,
      url: string.isRequired,
    })
  ).isRequired,
  f: func.isRequired,
};
