import React from 'react';
// import { addData } from '../../utils/api';
import { queryData } from '../../utils/api';

const Collaborators = () => (
  <section className="collaborators">
    <div className="container">
      <h1>Collaborators</h1>
      <p>I am the collaborators page.</p>
      {/* <input
          type="submit"
          value="submit"
          onClick={async () => addData({ title: 'successsss' })}
        /> */}
      {/* <input type="submit" value="test submit" onClick={async () => await queryData()} /> */}
    </div>
  </section>
);

export default Collaborators;
