import React, { Component } from 'react';

export default class DataSubmitForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({title: e.target.value});
    }

    handleSubmit(e) {
        alert('Something was submitted: ' + this.state.title);
        this.setState({title: ''});
        e.preventDefault();
    }
å
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={this.state.title} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}