import React from 'react';
import { Input } from 'react-materialize';
import { string, func } from 'prop-types';

export const TechnicalDetails = ({ val, f }) => (
  <Input
    s={12}
    name="technicalDetails"
    label="Data format, other specifications, funding organization, use restrictions, copyright, etc."
    value={val}
    onChange={f}
  />
);

TechnicalDetails.propTypes = {
  val: string.isRequired,
  f: func.isRequired,
};
