import React, { Fragment } from 'react';
import { Input } from 'react-materialize';
import { string, func, arrayOf } from 'prop-types';

// TODO: Figure out how to dynamically add fields

const Data = ({ name, val, f }) => (
  <Input s={12} name={name} placeholder={name} value={val} onChange={f} />
);

export const RelatedData = ({ val: data, f }) => (
  <Fragment>
    {data.map((d, i) => {
      const { val } = d;
      const name = `${i + 1}) Internal or external links`;
      return <Data name={name} val={val} f={f} key={i} />;
    })}
  </Fragment>
);

Data.defaultProps = {
  val: '',
};

Data.propTypes = {
  name: string.isRequired,
  val: string,
  f: func.isRequired,
};

RelatedData.propTypes = {
  val: arrayOf(string).isRequired,
  f: func.isRequired,
};
