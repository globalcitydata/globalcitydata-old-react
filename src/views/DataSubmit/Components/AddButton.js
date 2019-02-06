import React from 'react';
import { Button } from 'react-materialize';
import { func, string } from 'prop-types';

export const AddButton = ({ f, name }) => (
  <Button waves="light" onClick={f} value={name}>
    Add
  </Button>
);

AddButton.propTypes = {
  f: func.isRequired,
  name: string.isRequired,
};
