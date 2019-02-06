import React from 'react';
import { Button } from 'react-materialize';
import { bool, func } from 'prop-types';

export const SubmitButton = ({ isEnabled, f }) => (
  <Button s={12} waves="light" disabled={!isEnabled} onClick={f}>
    Submit
  </Button>
);

SubmitButton.propTypes = {
  isEnabled: bool.isRequired,
  f: func.isRequired,
};
