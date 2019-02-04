import React, { Fragment } from 'react';
import { Input } from 'react-materialize';
import { string, func, arrayOf } from 'prop-types';

// TODO: Figure out how to dynamically add fields

const Citation = ({ name, val, f }) => (
  <Input s={12} name={name} label={name} value={val} onChange={f} required />
);

export const Citations = ({ citations, f }) => (
  <Fragment>
    {citations.map((citation, i) => {
      const { val } = citation;
      const name = `${i}) Citation`;
      return <Citation name={name} val={val} f={f} />;
    })}
  </Fragment>
);

Citations.propTypes = {
  citations: arrayOf(string).isRequired,
  f: func.isRequired,
};

Citation.propTypes = {
  name: string.isRequired,
  val: string.isRequired,
  f: func.isRequired,
};
