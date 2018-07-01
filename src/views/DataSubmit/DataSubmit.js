import React, { Component } from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="title" placeholder="title" value={this.state.title} onChange={this.handleChange} />
        <textarea type="text" name="description" placeholder="description" value={this.state.description} onChange={this.handleChange} />
        <input type="text" name="owner" placeholder="owner" value={this.state.owner} onChange={this.handleChange} />
        <input type="text" name="applicableModels" placeholder="applicable models" value={this.state.applicableModels} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
