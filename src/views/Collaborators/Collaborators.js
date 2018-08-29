import React from 'react';
// import { addData } from '../../utils/api';
import { queryData } from '../../utils/api';

const Collaborators = () => (
  <section className="collaborators">
    <div className="container">
      <h1>Our Story</h1>
      <p>
        The global city data project seeks to create an open, federated platform where urban sustainability researchers and
        practitioners anywhere in the world can showcase their peer­reviewed urban datasets and models to the community at
        large. We seek to feature diverse urban datasets in one place, drawing upon studies from various regions of the world,
        covering many different determinants, sectors and sustainability outcomes, and incorporating the perspectives of many
        diverse disciplines. So you will see data elements representing many aspects of sustainable urban systems ­ human, social,
        ecological, infrastructural, technological, and political. A unique feature is that we have organized the datasets according to
        three spatial scales ­ intra­urban datasets, aggregate data/metrics for individual cities, and data across all urban areas in a
        nation.<br></br><br></br>
        This website is not a data repository but rather a collaborative platform for learning about available data sets and/or
        featuring your own data and models. More detail about each data product can be seen in the data briefs, including
        information to contact the authors directly to request more detail or further access to the data. We hope you will enjoy
        browsing the available datasets and models, contribute your own work after it is peer­reviewed, and blog about best
        practices in the development or use of urban data and models to advance sustainability outcomes in communities.<br></br><br></br>
        This data project was initiated in 2017 by Professor Anu Ramaswami when she served as lead Principal Investigator of
        three US National Science Foundation grants on sustainable urban infrastructure. Ramaswami saw the need for a
        comprehensive website that collated and featured many different urban datasets and models in one easily browsable
        platform, while each of the individual authors retained autonomy over their data products.<br></br><br></br>
        This collaborative data showcasing platform is managed by a committee of 6 researchers (faculty and students) who have
        contributed datasets or models to the website. We look forward to getting your feedback on how to make this more useful to
        researchers and practitioners alike.<br></br><br></br>
        Towards urban sustainability!<br></br><br></br>
        The global city data team....<br></br><br></br>
        Professor Anu Ramaswami
        Dana Boyer
        Sam Tabory
      </p>
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
