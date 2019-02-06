import React, { Fragment } from 'react';
import { Input } from 'react-materialize';
import { string, func, arrayOf } from 'prop-types';

// TODO: Figure out how to dynamically add fields

const KeyHighlight = ({ name, val, f }) => (
  <Input s={12} name={name} placeholder={name} value={val} onChange={f} />
);

export const KeyHighlights = ({ val: highlights, f }) => (
  <Fragment>
    {highlights.map((highlight, i) => {
      const { val } = highlight;
      const name = `${i + 1}) Key Highlight`;
      return <KeyHighlight name={name} val={val} f={f} key={name} />;
    })}
  </Fragment>
);

KeyHighlight.defaultProps = {
  val: '',
};

KeyHighlight.propTypes = {
  name: string.isRequired,
  val: string,
  f: func.isRequired,
};

KeyHighlights.propTypes = {
  val: arrayOf(string).isRequired,
  f: func.isRequired,
};
