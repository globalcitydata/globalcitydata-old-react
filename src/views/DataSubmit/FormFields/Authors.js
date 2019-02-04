import React, { Fragment } from 'react';
import { Input } from 'react-materialize';
import { string, func, shape } from 'prop-types';

// TODO: Figure out how to dynamically add author fields

const AuthorGroup = ({ name, email, f }) => (
  <Fragment>
    <Input s={12} name="name" label="Name" value={name} onChange={f} required />
    <Input
      s={12}
      name="email"
      label="Email"
      type="email"
      value={email}
      onChange={f}
      required
    />
  </Fragment>
);

export const Authors = ({ authors, f }) => (
  <Fragment>
    {authors.map(author => {
      const { name, email } = author;
      return <AuthorGroup name={name} email={email} f={f} />;
    })}
  </Fragment>
);

AuthorGroup.propTypes = {
  name: string.isRequired,
  email: string.isRequired,
  f: func.isRequired,
};

Authors.propTypes = {
  authors: shape({
    name: string.isRequired,
    email: string.isRequired,
  }).isRequired,
  f: func.isRequired,
};
