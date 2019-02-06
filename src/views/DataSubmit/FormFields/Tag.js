import React, { Fragment } from 'react';
import { Input, Row } from 'react-materialize';
import { string, func, arrayOf, shape } from 'prop-types';
import { startCase } from 'lodash';

export const Tag = ({ label, options, f }) => (
  <Fragment>
    <h4>{label}</h4>
    <Row>
      {options.map(({ value, group }) => (
        <Input
          name={group}
          type="checkbox"
          key={value}
          value={value}
          label={startCase(value)}
          onChange={f}
        />
      ))}
    </Row>
  </Fragment>
);

Tag.propTypes = {
  label: string.isRequired,
  options: arrayOf(
    shape({
      value: string.isRequired,
      label: string.isRequired,
      group: string.isRequired,
    })
  ).isRequired,
  f: func.isRequired,
};
