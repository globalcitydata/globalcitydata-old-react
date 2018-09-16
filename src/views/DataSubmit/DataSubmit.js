import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
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
  <Input s={12} name="title" label="Title" value={val} onChange={f} required />
);

const Description = ({ val, f }) => (
  <Input
    s={12}
    type="textarea"
    name="description"
    label="Description"
    value={val}
    onChange={f}
    required
  />
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
  <Input
    s={12}
    name="keyTakeaways"
    label="Key Takeaways"
    value={val}
    onChange={f}
    required
  />
);

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
  <Input
    s={12}
    name="technicalDetails"
    label="Technical Details"
    value={val}
    onChange={f}
    required
  />
);

const ApplicableData = ({ val, f }) => (
  <Input
    s={12}
    name="applicableData"
    label="Applicable Datasets, Models, or Tutorials - if multiple please separate by semicolon (;)"
    value={val}
    onChange={f}
    required
  />
);

const RelevantPublications = ({ val, f }) => (
  <Input
    s={12}
    type="textarea"
    name="relevantPublications"
    label="Relevant Publications - if multiple please separate by semicolon (;)"
    value={val}
    onChange={f}
    required
  />
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
  <Input
    s={12}
    name="owner"
    label="Your Full Name"
    value={val}
    onChange={f}
    required
  />
);

const Contact = ({ val, f }) => (
  <Input
    s={12}
    name="contact"
    label="Your Email"
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
      owner,
      relevantPublications,
      technicalDetails,
      title,
      usesAndVisualizations,
    } = this.state;

    const isEnabled =
      title.length > 0 &&
      description.length > 0 &&
      context.length > 0 &&
      keyTakeaways.length > 0 &&
      usesAndVisualizations.length > 0 &&
      technicalDetails.length > 0 &&
      applicableData.length > 0 &&
      relevantPublications.length > 0 &&
      owner.length > 0 &&
      contact.length > 0;

    return (
      <section className="dataSubmit" id="dataSubmit">
        <div className="container">
          <h1>Submit Data</h1>
          <form>
            <Row>
              <DataType f={this.handleChange} />
              <Title val={title} f={this.handleChange} />
              <Description val={description} f={this.handleChange} />
              <Context val={context} f={this.handleChange} />
              <KeyTakeaways val={keyTakeaways} f={this.handleChange} />
              <UsesAndVisualizations
                val={usesAndVisualizations}
                f={this.handleChange}
              />
              <TechnicalDetails val={technicalDetails} f={this.handleChange} />
              <ApplicableData val={applicableData} f={this.handleChange} />
              <RelevantPublications
                val={relevantPublications}
                f={this.handleChange}
              />
              <Parameters f={this.handleRadioChange} />
              <Outcomes f={this.handleRadioChange} />
              <SpatialScales f={this.handleRadioChange} />
              <TemporalScales f={this.handleRadioChange} />
              <WorldRegions f={this.handleRadioChange} />
              <Owner val={owner} f={this.handleChange} />
              <h6>upload images here</h6>
              <input type="file" onChange={this.fileHandler} />
              <Contact val={contact} f={this.handleChange} />
              <Submit isEnabled={isEnabled} f={this.handleSubmit} />
            </Row>
          </form>
        </div>
      </section>
    );
  }
}

DataSubmitForm.propTypes = {};
