import React from 'react';
import { Button } from 'react-materialize';
import { func, string, number } from 'prop-types';

/*
 * takes delete function, tag name, and index of input field being deleted
 * used by dynamic string arrays like Key Highlights or Related Data
 */
export const DeleteButton = ({ f, name, i }) => (
  <Button waves="light" onClick={f} value={name} id={i}>
    Delete
  </Button>
);

DeleteButton.propTypes = {
  f: func.isRequired,
  name: string.isRequired,
  i: number.isRequired,
};
