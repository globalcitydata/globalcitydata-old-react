import React from 'react';
import { Input } from 'react-materialize';
import { string, func } from 'prop-types';

export const Title = ({ val, f }) => (
  <Input
    s={12}
    name="title"
    placeholder="your title"
    value={val}
    onChange={f}
  />
);

Title.propTypes = {
  val: string.isRequired,
  f: func.isRequired,
};
