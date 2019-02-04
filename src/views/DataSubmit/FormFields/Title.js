import React from 'react';
import { Input } from 'react-materialize';
import { string, func } from 'prop-types';

export const Title = ({ val, f }) => (
  <Input s={12} name="title" label="Title" value={val} onChange={f} required />
);

Title.propTypes = {
  val: string.isRequired,
  f: func.isRequired,
};
