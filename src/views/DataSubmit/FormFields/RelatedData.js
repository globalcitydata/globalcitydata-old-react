import React, { Fragment } from 'react';
import { Input } from 'react-materialize';
import { string, func, arrayOf } from 'prop-types';

// TODO: Figure out how to dynamically add fields

const Data = ({ name, val, f }) => (
  <Input s={12} name={name} label={name} value={val} onChange={f} required />
);

export const RelatedData = ({ data, f }) => (
  <Fragment>
    {data.map((d, i) => {
      const { val } = d;
      const name = `${i}) Internal or external links`;
      return <Citation name={name} val={val} f={f} />;
    })}
  </Fragment>
);

RelatedData.propTypes = {
  data: arrayOf(string).isRequired,
  f: func.isRequired,
};

Data.propTypes = {
  name: string.isRequired,
  val: string.isRequired,
  f: func.isRequired,
};
