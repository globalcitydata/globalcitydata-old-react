import React from 'react';
import { Input } from 'react-materialize';
import { string, func } from 'prop-types';

export const Summary = ({ val, f }) => (
  <Input
    s={12}
    type="textarea"
    name="summary"
    label="What the dataset does, intellectual merit and novelty--not just a rearrangement of open data; 50 words max."
    value={val}
    onChange={f}
    required
  />
);

Summary.propTypes = {
  val: string.isRequired,
  f: func.isRequired,
};
