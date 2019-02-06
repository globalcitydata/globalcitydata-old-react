import React, { Fragment } from 'react';
import { Input } from 'react-materialize';
import { string, func, arrayOf } from 'prop-types';

// TODO: Figure out how to dynamically add fields

const KeyHighlight = ({ label, val, f }) => (
  <Input
    s={12}
    name="keyHighlights"
    placeholder={label}
    value={val}
    onChange={f}
  />
);

export const KeyHighlights = ({ val: highlights, f }) => (
  <Fragment>
    {highlights.map((val, i) => {
      const label = `${i + 1}) Key Highlight`;
      return <KeyHighlight label={label} val={val} f={f} key={label} />;
    })}
  </Fragment>
);

KeyHighlight.defaultProps = {
  val: '',
};

KeyHighlight.propTypes = {
  label: string.isRequired,
  val: string,
  f: func.isRequired,
};

KeyHighlights.propTypes = {
  val: arrayOf(string).isRequired,
  f: func.isRequired,
};
