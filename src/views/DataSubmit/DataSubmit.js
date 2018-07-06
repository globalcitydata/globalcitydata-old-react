import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';
import dataState from '../../utils/data';

export default class DataSubmitForm extends Component {
  state = dataState;

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleRadioChange = (e) => {
    let parameters, outcomes, spatialScales, temporalScales, worldRegions;
    const val = e.target.value;
    const name = e.target.name;
    const foo = { ...this.state[name] }
    foo[val] = !foo[val];
    switch (name) {
      case 'parameters':
        parameters = foo;
        this.setState({ parameters });
        break;
      case 'outcomes':
        outcomes = foo;
        this.setState({ outcomes });
        break;
      case 'spatialScales':
        spatialScales = foo;
        this.setState({ spatialScales });
        break;
      case 'temporalScales':
        temporalScales = foo;
        this.setState({ temporalScales });
        break;
      case 'worldRegions':
        worldRegions = foo;
        this.setState({ worldRegions });
        break;
      default:
        alert("Error with the submit form. Please contact globalcitydata and try again in a couple days.");
    }
  };

  handleSubmit = (e) => {
    const { onSubmitDataDetail } = this.props;
    const value = this.state;

    onSubmitDataDetail(value);

    // clear state
    for (const input of e.target) {
      this.setState({
        [input.name]: ''
      });;
    }
    e.preventDefault();
  };

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
      worldRegions
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
              <Input
                s={12}
                type="select"
                name="contentType"
                label="Content Type"
                defaultValue="1"
                required
              >
                <option value='1'>Dataset</option>
                <option value='2'>Model</option>
                <option value='3'>Tutorial</option>
              </Input>
              <Input
                s={12}
                name="title"
                label="Title"
                value={title}
                onChange={this.handleChange}
                required
              />
              <Input
                s={12}
                type="textarea"
                name="description"
                label="Description"
                value={description}
                onChange={this.handleChange}
                required
              />
              <Input
                s={12}
                type="textarea"
                name="context"
                label="Context"
                value={context}
                onChange={this.handleChange}
                required
              />
              <Input
                s={12}
                name="keyTakeaways"
                label="Key Takeaways"
                value={keyTakeaways}
                onChange={this.handleChange}
                required
              />
              <Input
                s={12}
                name="usesAndVisualizations"
                label="Sample Uses and Visualizations"
                value={usesAndVisualizations}
                onChange={this.handleChange}
                required
              />
              <Input
                s={12}
                name="technicalDetails"
                label="Technical Details"
                value={technicalDetails}
                onChange={this.handleChange}
                required
              />
              <Input
                s={12}
                name="applicableData"
                label="Applicable Datasets, Models, or Tutorials - if multiple please separate by semicolon (;)"
                value={applicableData}
                onChange={this.handleChange}
                required
              />
              <Input
                type="textarea"
                s={12}
                name="relevantPublications"
                label="Relevant Publications - if multiple please separate by semicolon (;)"
                value={relevantPublications}
                onChange={this.handleChange}
                required
              />
              <Row>
                <h4>Parameters</h4>
                {parameterKeys.map((val) => {
                  return <Input
                    name="parameters"
                    type="checkbox"
                    value={val}
                    label={val}
                    onChange={this.handleRadioChange}
                  />
                })}
              </Row>
              <Row>
                <h4>Outcomes</h4>
                {outcomeKeys.map((val) => {
                  return <Input
                    name="outcomes"
                    type="checkbox"
                    value={val}
                    label={val}
                    onChange={this.handleRadioChange}
                  />
                })}
              </Row>
              <Row>
                <h4>Spatial Scales</h4>
                {spatialScaleKeys.map((val) => {
                  return <Input
                    name="spatialScales"
                    type="checkbox"
                    value={val}
                    label={val}
                    onChange={this.handleRadioChange}
                  />
                })}
              </Row>
              <Row>
                <h4>Temporal Scales</h4>
                {temporalScaleKeys.map((val) => {
                  return <Input
                    name="temporalScales"
                    type="checkbox"
                    value={val}
                    label={val}
                    onChange={this.handleRadioChange}
                  />
                })}
              </Row>
              <Row>
                <h4>World Regions</h4>
                {worldRegionKeys.map((val) => {
                  return <Input
                    name="worldRegions"
                    type="checkbox"
                    value={val}
                    label={val}
                    onChange={this.handleRadioChange}
                  />
                })}
              </Row>
              <Input
                s={12}
                name="owner"
                label="Your Full Name"
                value={owner}
                onChange={this.handleChange}
                required
              />
              <Input
                s={12}
                name="contact"
                label="Your Email"
                value={contact}
                onChange={this.handleChange}
                required
              />
              <Button s={12} waves="light" disabled={!isEnabled} onClick={this.handleSubmit}>
                Submit
              </Button>
            </Row>
          </form>
        </div>
      </section>
    );
  }
}
