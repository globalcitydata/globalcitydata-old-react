import React, { Fragment } from 'react';
import { Input } from 'react-materialize';
import { string, func, arrayOf } from 'prop-types';
import { startCase } from 'lodash';

// TODO: Figure out how to dynamically add fields

const DynamicInput = ({ label, val, name, f }) => (
  <Input s={12} name={name} placeholder={label} value={val} onChange={f} />
);

export const DynamicStringArray = ({ val, f, name }) => (
  <Fragment>
    {val.map((s, i) => {
      const label = `${i + 1}) ${startCase(name)}`;
      return (
        <DynamicInput label={label} val={s} name={name} f={f} key={label} />
      );
    })}
  </Fragment>
);

DynamicInput.defaultProps = {
  val: '',
};

DynamicInput.propTypes = {
  label: string.isRequired,
  val: string,
  name: string.isRequired,
  f: func.isRequired,
};

DynamicStringArray.propTypes = {
  val: arrayOf(string).isRequired,
  name: string.isRequired,
  f: func.isRequired,
};
