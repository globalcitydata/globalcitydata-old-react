import React from 'react';
import { Button } from 'react-materialize';
import { func } from 'prop-types';

export const AddButton = ({ add }) => (
  <Button waves="light" onClick={add}>
    Add
  </Button>
);

AddButton.propTypes = {
  add: func.isRequired,
};
