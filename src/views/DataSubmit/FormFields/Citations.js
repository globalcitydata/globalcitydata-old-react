import React, { Fragment } from 'react';
import { Input } from 'react-materialize';
import { string, func, arrayOf } from 'prop-types';

// TODO: Figure out how to dynamically add fields

const Citation = ({ name, val, f }) => (
  <Input s={12} name={name} placeholder={name} value={val} onChange={f} />
);

export const Citations = ({ val: citations, f }) => (
  <Fragment>
    {citations.map((citation, i) => {
      const { val } = citation;
      const name = `${i + 1}) Citation`;
      return <Citation name={name} val={val} f={f} key={name} />;
    })}
  </Fragment>
);

Citation.defaultProps = {
  val: '',
};

Citation.propTypes = {
  name: string.isRequired,
  val: string,
  f: func.isRequired,
};

Citations.propTypes = {
  val: arrayOf(string).isRequired,
  f: func.isRequired,
};
