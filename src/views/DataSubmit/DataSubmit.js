import React, { Component } from 'react';
import { Row, Input, Button } from 'react-materialize';

export default class DataSubmitForm extends Component {
  state = {
    applicableModels: "",
    contact: "",
    context: "",
    description: "",
    keyTakeaways: "",
    outcomes: {
      environment: false,
      equity: false,
      health: false,
      livability: false,
      wellBeing: false,
    },
    owner: "",
    parameters: {
      social: false,
      environment: false,
      infrastructure: false,
      urbanDesign: false,
    },
    published: false,
    relevantPublications: [],
    spatialScales: {
      intraUrban: false,
      wholeCity: false,
      nationalUrban: false,
    },
    technicalDetails: "",
    temporalScales: {
      snapshot: false,
      timeSeries: false,
      futuresModeling: false,
    },
    title: "",
    type: "",
    usesAndVisualizations: "",
    worldRegions: {
      us: false,
      china: false,
      india: false,
    },
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    const { onSubmitDataDetail } = this.props;
    const value = this.state;

    onSubmitDataDetail(value);

    // clear state
    for (let input of e.target) {
      this.setState({
        [input.name]: ""
      })
    }
    e.preventDefault();
  }


  render() {
    return (
      <form>
        <Row>
          <Input s={12} name="title" label="title" value={this.state.title} onChange={this.handleChange} />
          <Input s={12} type="textarea" name="description" label="description" value={this.state.description} onChange={this.handleChange} />
          <Input s={12} name="owner" label="owner" value={this.state.owner} onChange={this.handleChange} />
          <Input s={12} name="applicableModels" label="applicableModels" value={this.state.applicableModels} onChange={this.handleChange} />
          <Button s={12} waves="light" onClick={this.handleSubmit}>Submit</Button>
        </Row>
      </form>
    );
  }
}
