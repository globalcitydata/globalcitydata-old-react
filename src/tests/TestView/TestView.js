import React from 'react';
import { fetchPublications } from '../../utils/api';

const handleClick = () => null;

const TestView = () => (
  <div className="container">
    <h1>I'm a development page for testing.</h1>
    <button onClick={handleClick} type="submit">
      Submit
    </button>
  </div>
);

export default TestView;
