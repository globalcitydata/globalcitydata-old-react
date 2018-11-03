import React, { Component } from 'react';
import { Row, Input, Button, Col } from 'react-materialize';
import PropTypes from 'prop-types';

// utils
import { scroll } from '../../utils/scroll';
import { dataState } from '../../utils/data';
import { addData } from '../../utils/api';
import {
  DATA_TYPES,
  OUTCOMES,
  DETERMINANTS,
  SPATIAL_SCALES,
  TEMPORAL_SCALES,
  SECTORS,
  WORLD_REGIONS,
} from '../../utils/tags';

const DataType = ({ f }) => (
  <Input
    s={12}
    type="select"
    name="contentType"
    label="Data Type"
    defaultValue="dataset"
    onChange={f}
    required
  >
    {DATA_TYPES.map(val => (
      <option key={val} value={val}>
        {val}
      </option>
    ))}
  </Input>
);

const Title = ({ val, f }) => (
  <div>
    <h6>Title</h6>
    <Input s={12} 
    name="title" 
    label="" 
    value={val} 
    onChange={f} 
    required />
  </div>
);

const Description = ({ val, f }) => (
  <div>
    <h6>Summary Overview</h6>
    <p>
      What the dataset does, intellectual merit and novelty--not just a
      rearrangement of open data; 50 words max, please include a representative image
    </p>
    <Input
      s={12}
      type="textarea"
      name="description"
      label="Summary Overview"
      value={val}
      onChange={f}
      required
    />
  </div>  
);

const Context = ({ val, f }) => (
  <Input
    s={12}
    type="textarea"
    name="context"
    label="Context"
    value={val}
    onChange={f}
    required
  />
);

const KeyTakeaways = ({ val, f }) => (
  <div>
    <h6>Detailed Description</h6>
    <p>
      History of creation, why is this arrangement new &amp; value added to
      existing data, details of contents, sources, sample size, uses etc., 350 words max, descriptive
      image optional
    </p>
    <Input type="file" />
    <Input
      s={12}
      type="textarea"
      name="keyTakeaways"
      label="Detailed Description "
      value={val}
      onChange={f}
      required
    />
  </div>
);

const image1 = ({ val, f }) => (
  <div>
    <h6>TEST TEST</h6>
    <Input 
      s={12}
      type="image"
      value={val}
      onChange={f}
      required
    />
  </div>
);

const Highlights = ({ val, f}) => (
  <div>
    
    <Input
      s={12}
      name="highlight"
      label="1) Key Highlight"
      value={val}
      onChange={f}
      required
    />
  </div>
)

const Highlights_two = ({ val, f }) => (
    <Input
      s={12}
      name="highlight2"
      label="2) Key Highlight"
      value={val}
      onChange={f}
      required
    />
)

const Highlights_three = ({ val, f }) => (
    <Input
      s={12}
      name="highlight3"
      label="3) Key Highlight"
      value={val}
      onChange={f}
      required
    />
)

const Citations = ({ val, f}) => (
  <Input
    s={12}
    name="Citations of the dataset/model/tool"
    label="citations"
    value={val}
    onChange={f}
    required
  />
)

const UsesAndVisualizations = ({ val, f }) => (
  <Input
    s={12}
    name="usesAndVisualizations"
    label="Sample Uses and Visualizations"
    value={val}
    onChange={f}
    required
  />
);

const TechnicalDetails = ({ val, f }) => (
  <div>
    <h6>Technical Details</h6>
    <Input
      s={12}
      name="technicalDetails"
      label="Technical Details"
      value={val}
      onChange={f}
      required
    />
  </div>
);


const ApplicableData = ({ val, f }) => (
  <div>
    <h6>Related datasets, models, or tutorials</h6>
    <Input
      s={12}
      name="applicableData"
      label="Internal or external links - if multiple please separate by semicolon (;)"
      value={val}
      onChange={f}
      required
    />
  </div>
);

const RelevantPublications = ({ val, f }) => (
  <Row>
    <Input
      s={6}
      type="textarea"
      name="relevantPublications"
      label="Associated Publications - if multiple please separate by semicolon (;)"
      value={val}
      onChange={f}
      required
    />
    <Input
      s={6}
      type="textarea"
      name="link"
      label="Relevant URL - if multiple please seperate by semicolon (;)"
    />
  </Row>
);

const Parameters = ({ f }) => (
  <Row>
    <h4>Determinants</h4>
    {DETERMINANTS.map(val => (
      <Input
        name="parameters"
        type="checkbox"
        key={val}
        value={val}
        label={val}
        onChange={f}
      />
    ))}
  </Row>
);

const Outcomes = ({ f }) => (
  <Row>
    <h4>Outcomes</h4>
    {OUTCOMES.map(val => (
      <Input
        name="outcomes"
        type="checkbox"
        key={val}
        value={val}
        label={val}
        onChange={f}
      />
    ))}
  </Row>
);

const SpatialScales = ({ f }) => (
  <Row>
    <h4>Spatial Scales</h4>
    {SPATIAL_SCALES.map(val => (
      <Input
        name="spatialScales"
        type="checkbox"
        key={val}
        value={val}
        label={val}
        onChange={f}
      />
    ))}
  </Row>
);

const TemporalScales = ({ f }) => (
  <Row>
    <h4>Temporal Scales</h4>
    {TEMPORAL_SCALES.map(val => (
      <Input
        name="temporalScales"
        type="checkbox"
        key={val}
        value={val}
        label={val}
        onChange={f}
      />
    ))}
  </Row>
);

const Sectors = ({ f }) => (
  <Row>
    <h4>Sectors</h4>
    {SECTORS.map(val => (
      <Input
        name="Sectors"
        type="checkbox"
        key={val}
        value={val}
        label={val}
        onChange={f}
      />
    ))}
  </Row>
)

const WorldRegions = ({ f }) => (
  <Row>
    <h4>World Regions</h4>
    {WORLD_REGIONS.map(val => (
      <Input
        name="worldRegions"
        type="checkbox"
        key={val}
        value={val}
        label={val}
        onChange={f}
      />
    ))}
  </Row>
);

const Owner = ({ val, f }) => (
  <div>
    <h6>Corresponding Author(s)</h6>
    <Input
      s={12}
      name="owner"
      label="Name(s)"
      value={val}
      onChange={f}
      required
    />
  </div>
);

const Contact = ({ val, f }) => (
  <Input
    s={12}
    name="contact"
    label="Email"
    type="email"
    value={val}
    onChange={f}
    required
  />
);

const Submit = ({ isEnabled, f }) => (
  <Button s={12} waves="light" disabled={!isEnabled} onClick={f}>
    Submit
  </Button>
);

function preProcessSubmit(oldValue) {
  // split publications into array
  const value = oldValue;
  let pubs = value.relevantPublications.split(';');
  pubs = pubs.filter(pub => pub !== '' && pub !== ' ');
  value.relevantPublications = pubs.map(pub => pub.trim());
  // add url
  value.url = value.title.split(' ').join('-');
  return value;
}

export default class DataSubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = dataState;
    this.handleChange = this.handleChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRadioChange = e => {
    const { name: group, value } = e.target;
    this.setState(oldState => {
      const i = oldState[group].indexOf(value);
      if (i !== -1) oldState[group].splice(i, 1);
      else oldState[group].push(value);
      return oldState;
    });
  };

  async handleSubmit(e) {
    e.preventDefault();
    try {
      const value = preProcessSubmit(this.state);
      await addData(value);
      this.setState(dataState);
      window.Materialize.toast('Success! Your data is pending review.', 4000);
    } catch (err) {
      window.Materialize.toast(
        'Uh oh. Something went wrong with your submission.',
        4000
      );
    }
    // scroll to top after submit
    const anchor = document.querySelector('#dataSubmit');
    scroll.animateScroll(anchor);
  }

  render() {
    const {
      applicableData,
      contact,
      context,
      description,
      keyTakeaways,
      image1,
      owner,
      relevantPublications,
      citations,
      highlights,
      highlights2,
      highlights3,
      technicalDetails,
      title,
      usesAndVisualizations,
    } = this.state;

    const isEnabled =
      title.length > 0 &&
      description.length > 0 &&
      context.length > 0 &&
      image1.length > 0 &&
      keyTakeaways.length > 0 &&
      usesAndVisualizations.length > 0 &&
      citations.length > 0 &&
      highlights.length > 0 &&
      highlights2.length > 0 &&
      highlights3.length > 0 &&
      technicalDetails.length > 0 &&
      applicableData.length > 0 &&
      relevantPublications.length > 0 &&
      owner.length > 0 &&
      contact.length > 0;

    return (
      <section className="dataSubmit" id="dataSubmit">
        <div className="container">
          <Row s={9}>
            <h1>Submit Data</h1>
          </Row>
          <form>
            <Row>
              <Title val={title} f={this.handleChange} />
              <DataType f={this.handleChange} />
              <Owner val={owner} f={this.handleChange} />
              {/* <h6>Upload Images</h6> */}
              {/* <input type="file" onChange={this.fileHandler} /> */}
              <Contact val={contact} f={this.handleChange} />
              <Description val={description} f={this.handleChange} />
              <h6>Key Highlights</h6><p>Key elements/highlights of the dataset/model, max 200 characters each</p>
              <Highlights val={highlights} f={this.handleChange} />
              <Highlights_two val={highlights2} f={this.handleChange} />
              <Highlights_three val={highlights3} f={this.handleChange} />
              <h6>Citations For Datasets/Model/Tools</h6>
              <Citations val={citations} f={this.handleChange} />
              <image1 val={image1} f={this.handleChange} />
              <KeyTakeaways val={keyTakeaways} f={this.handleChange} />
              {/* <Context val={context} f={this.handleChange} />
              <UsesAndVisualizations
                val={usesAndVisualizations}
                f={this.handleChange}
              /> */}
              {/* <p><strong>Upload Images:</strong></p><Input type="file" /> */}
              <h6>W</h6>
              <TechnicalDetails val={technicalDetails} f={this.handleChange} />
              <ApplicableData val={applicableData} f={this.handleChange} />
              <h6>Citations</h6>
              <Col s={12} m={10} l={11}>
              <p><strong>Please enter your citations in the same format as the following example: </strong><br></br><br></br><i>Boyer, D., & Ramaswami, A. (2017). 
              What Is the Contribution of City-Scale Actions to the Overall Food System’s Environmental Impacts?: 
              Assessing Water, Greenhouse Gas, and Land Impacts of Future Urban Food Scenarios. Environmental Science and 
              Technology, 51(20).</i></p>
              </Col>  
              <RelevantPublications
              val={relevantPublications}
              f={this.handleChange}
              />
              <Button onClick={
                <RelevantPublications
                  val={relevantPublications}
                  f={this.handleChange}
                />
              }>Add</Button>       
              <Parameters f={this.handleRadioChange} />
              <Outcomes f={this.handleRadioChange} />
              <SpatialScales f={this.handleRadioChange} />
              <TemporalScales f={this.handleRadioChange} />
              <Sectors f={this.handleRadioChange} />
              <WorldRegions f={this.handleRadioChange} />

              <Submit isEnabled={isEnabled} f={this.handleSubmit} />
            </Row>
          </form>
        </div>
      </section>
    );
  }
}

DataSubmitForm.propTypes = {};
