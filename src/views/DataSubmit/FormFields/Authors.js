import React, { Fragment } from 'react';
import { Input } from 'react-materialize';
import { string, func, shape, arrayOf } from 'prop-types';

// TODO: Figure out how to dynamically add author fields

const AuthorGroup = ({ name, email, f }) => (
  <Fragment>
    <Input s={12} name="name" label="Name" value={name} onChange={f} />
    <Input
      s={12}
      name="email"
      label="Email"
      type="email"
      value={email}
      onChange={f}
    />
  </Fragment>
);

export const Authors = ({ val: authors, f }) => (
  <Fragment>
    {authors.map(({ name, email }, i) => {
      const title = `Author ${i + 1}`;
      return (
        <Fragment>
          <h6>{title}</h6>
          <div style={{ padding: '0 2rem' }}>
            <AuthorGroup name={name} email={email} f={f} key={name} />
          </div>
        </Fragment>
      );
    })}
  </Fragment>
);

AuthorGroup.propTypes = {
  name: string.isRequired,
  email: string.isRequired,
  f: func.isRequired,
};

Authors.propTypes = {
  val: arrayOf(
    shape({
      name: string.isRequired,
      email: string.isRequired,
    })
  ).isRequired,
  f: func.isRequired,
};
