import React from 'react';
import { Button } from 'react-materialize';
import { func, string } from 'prop-types';

/*
 * Takes add function and tag name as inputs.
 * used by dynamic string arrays like Key Highlights or Related Data
 */
export const AddButton = ({ f, name }) => (
  <Button waves="light" onClick={f} value={name}>
    Add
  </Button>
);

AddButton.propTypes = {
  f: func.isRequired,
  name: string.isRequired,
};
