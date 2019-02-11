import React, { Fragment } from 'react';
import { Input, Row } from 'react-materialize';
import { string, func, arrayOf, shape } from 'prop-types';
import { startCase } from 'lodash';

export const Tag = ({ label, options, f, descriptions }) => (
  <Fragment>
    <h4>{label}</h4>
    <Row>
      <div style={{ marginLeft: '2rem' }}>
        {options.map(({ value, group }, i) => {
          let descr = '';
          if (descriptions && descriptions.length > 0) {
            descr = `(${descriptions[i]})`;
          }
          const optionLabel = `${startCase(value)} ${descr}`;
          return (
            <Input
              name={group}
              type="checkbox"
              key={value}
              value={value}
              label={optionLabel}
              onChange={f}
              s={12}
            />
          );
        })}
      </div>
    </Row>
  </Fragment>
);

Tag.defaultProps = {
  descriptions: [],
};

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
  descriptions: arrayOf(string),
};
