import React, { Fragment } from 'react';
import { Input } from 'react-materialize';
import { string, func, arrayOf } from 'prop-types';

// TODO: Figure out how to dynamically add fields

const KeyHighlight = ({ name, val, f }) => (
  <Input s={12} name={name} label={name} value={val} onChange={f} required />
);

export const KeyHighlights = ({ highlights, f }) => (
  <Fragment>
    {highlights.map((highlight, i) => {
      const { val } = highlight;
      const name = `${i}) Key Highlight`;
      return <KeyHighlight name={name} val={val} f={f} />;
    })}
  </Fragment>
);

KeyHighlights.propTypes = {
  highlights: arrayOf(string).isRequired,
  f: func.isRequired,
};

KeyHighlight.propTypes = {
  name: string.isRequired,
  val: string.isRequired,
  f: func.isRequired,
};
