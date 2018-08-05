import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import PropTypes from 'prop-types';
import { dataState } from '../../utils/data';
import { addData } from '../../utils/api';

export default class DataSubmitForm extends Component {
  state = dataState;

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRadioChange = e => {
    let parameters, outcomes, spatialScales, temporalScales, worldRegions; // eslint-disable-line
    const { name, value } = e.target;
    const oldState = { ...this.state[name] }; // eslint-disable-line
    oldState[value] = !oldState[value];
    switch (name) {
      case 'parameters':
        parameters = oldState;
        this.setState({ parameters });
        break;
      case 'outcomes':
        outcomes = oldState;
        this.setState({ outcomes });
        break;
      case 'spatialScales':
        spatialScales = oldState;
        this.setState({ spatialScales });
        break;
      case 'temporalScales':
        temporalScales = oldState;
        this.setState({ temporalScales });
        break;
      case 'worldRegions':
        worldRegions = oldState;
        this.setState({ worldRegions });
        break;
      default:
        alert(
          'Error with the submit form. Please contact globalcitydata and try again in a couple days.'
        );
    }
  };

  async handleSubmit(e) {
    e.preventDefault();
    const value = this.state;
    await addData(value);
    this.setState(dataState);
    window.Materialize.toast('Success! Your data is pending review.', 4000);
  }

  // handleSubmit = async (e) => {
  //   const value = this.state;
  //   // const { onAddData } = this.props;
  //   // await onAddData(value);
  //   await addData(value);
  //   // clear state
  //   // for (const input of e.target) {
  //   //   this.setState({
  //   //     [input.name]: ''
  //   //   });;
  //   // }
  //   // e.preventDefault();
  // };

  render() {
    const {
      applicableData,
      contact,
      context,
      description,
      keyTakeaways,
      outcomes,
      owner,
      parameters,
      relevantPublications,
      spatialScales,
      technicalDetails,
      temporalScales,
      title,
      usesAndVisualizations,
      worldRegions,
    } = this.state;

    const isEnabled = title.length > 0 && // eslint-disable-line
      description.length > 0
      && context.length > 0
      && keyTakeaways.length > 0
      && usesAndVisualizations.length > 0
      && technicalDetails.length > 0
      && applicableData.length > 0
      && relevantPublications.length > 0
      && owner.length > 0
      && contact.length > 0;

    const parameterKeys = Object.keys(parameters);
    const outcomeKeys = Object.keys(outcomes);
    const spatialScaleKeys = Object.keys(spatialScales);
    const temporalScaleKeys = Object.keys(temporalScales);
    const worldRegionKeys = Object.keys(worldRegions);

    return (
      <section className="dataSubmit">
        <div className="container">
          <h1>Submit Data</h1>
          <form>
            <Row>
              {/* Content Type */}
              <Input
                s={12}
                type="select"
                name="contentType"
                label="Content Type"
                defaultValue="dataset"
                onChange={this.handleChange}
                required
              >
                <option value="dataset">Dataset</option>
                <option value="model">Model</option>
                <option value="tutorial">Tutorial</option>
              </Input>
              {/* Title */}
              <Input
                s={12}
                name="title"
                label="Title"
                value={title}
                onChange={this.handleChange}
                required
              />
              {/* Description */}
              <Input
                s={12}
                type="textarea"
                name="description"
                label="Description"
                value={description}
                onChange={this.handleChange}
                required
              />
              {/* Context */}
              <Input
                s={12}
                type="textarea"
                name="context"
                label="Context"
                value={context}
                onChange={this.handleChange}
                required
              />
              {/* Key Takeaways */}
              <Input
                s={12}
                name="keyTakeaways"
                label="Key Takeaways"
                value={keyTakeaways}
                onChange={this.handleChange}
                required
              />
              {/* Sample Uses and Visualizations */}
              <Input
                s={12}
                name="usesAndVisualizations"
                label="Sample Uses and Visualizations"
                value={usesAndVisualizations}
                onChange={this.handleChange}
                required
              />
              {/* Technical Details */}
              <Input
                s={12}
                name="technicalDetails"
                label="Technical Details"
                value={technicalDetails}
                onChange={this.handleChange}
                required
              />
              {/* Applicable Data */}
              <Input
                s={12}
                name="applicableData"
                label="Applicable Datasets, Models, or Tutorials - if multiple please separate by semicolon (;)"
                value={applicableData}
                onChange={this.handleChange}
                required
              />
              {/* Relevant Publications */}
              <Input
                s={12}
                type="textarea"
                name="relevantPublications"
                label="Relevant Publications - if multiple please separate by semicolon (;)"
                value={relevantPublications}
                onChange={this.handleChange}
                required
              />
              {/* Parameters */}
              <Row>
                <h4>Parameters</h4>
                {parameterKeys.map(val => (
                  <Input
                    name="parameters"
                    type="checkbox"
                    key={val}
                    value={val}
                    label={val}
                    onChange={this.handleRadioChange}
                  />
                ))}
              </Row>
              {/* Outcomes */}
              <Row>
                <h4>Outcomes</h4>
                {outcomeKeys.map(val => (
                  <Input
                    name="outcomes"
                    type="checkbox"
                    key={val}
                    value={val}
                    label={val}
                    onChange={this.handleRadioChange}
                  />
                ))}
              </Row>
              {/* Spatial Scales */}
              <Row>
                <h4>Spatial Scales</h4>
                {spatialScaleKeys.map(val => (
                  <Input
                    name="spatialScales"
                    type="checkbox"
                    key={val}
                    value={val}
                    label={val}
                    onChange={this.handleRadioChange}
                  />
                ))}
              </Row>
              {/* Temporal Scales */}
              <Row>
                <h4>Temporal Scales</h4>
                {temporalScaleKeys.map(val => (
                  <Input
                    name="temporalScales"
                    type="checkbox"
                    key={val}
                    value={val}
                    label={val}
                    onChange={this.handleRadioChange}
                  />
                ))}
              </Row>
              {/* World Regions */}
              <Row>
                <h4>World Regions</h4>
                {worldRegionKeys.map(val => (
                  <Input
                    name="worldRegions"
                    type="checkbox"
                    key={val}
                    value={val}
                    label={val}
                    onChange={this.handleRadioChange}
                  />
                ))}
              </Row>
              {/* Owner */}
              <Input
                s={12}
                name="owner"
                label="Your Full Name"
                value={owner}
                onChange={this.handleChange}
                required
              />
              {/* Contact */}
              <Input
                s={12}
                name="contact"
                label="Your Email"
                value={contact}
                onChange={this.handleChange}
                required
              />
              <Button
                s={12}
                waves="light"
                disabled={!isEnabled}
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </Row>
          </form>
        </div>
      </section>
    );
  }
}

DataSubmitForm.propTypes = {};
