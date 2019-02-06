import React from 'react';
import { Input } from 'react-materialize';
import { func } from 'prop-types';

import { DATA_TYPES } from '../../../utils/tags';

export const DataType = ({ f }) => (
  <Input
    s={12}
    type="select"
    name="dataType"
    label="Data Type"
    onChange={f}
    required
  >
    {DATA_TYPES.map(val => (
      <option key={val} value={val}>
        {val}
      </option>
    ))}
  </Input>
);

DataType.propTypes = {
  f: func.isRequired,
};
