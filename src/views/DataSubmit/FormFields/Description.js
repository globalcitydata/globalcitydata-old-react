import React from 'react';
import { Input } from 'react-materialize';
import { string, func } from 'prop-types';

export const Description = ({ val, f }) => {
  const label = `History of creation, why is this arrangement new & value 
      added to existing data, details of contents, sources, sample size, uses etc., 
      350 words max.`;
  return (
    <Input
      s={12}
      type="textarea"
      name="description"
      label={label}
      value={val}
      onChange={f}
    />
  );
};

Description.propTypes = {
  val: string.isRequired,
  f: func.isRequired,
};
