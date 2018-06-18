import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import { PropTypes } from 'prop-types';
// import {getFriends} from '../utils/api';

function DataCard(props) {
    const {data} = props;
    return (
        <div className="card">
            <div className="card-title">
                <h3>{data.title}</h3>
            </div>
            <div className="card-content">
                <h4 className="card-type">{data.type}</h4>
                <p className="card-preview">{data.description.slice(0, 100)}</p>
                {/* <button className="btn">Dataset Detail</button> */}
                <Button variant="contained" color="primary">Dataset Detail</Button>
            </div>
        </div>
    )
}

export default class DataList extends Component {
    render() {
        let dataList = [
            { 'title': 'Water Resources', 'type': 'Dataset', 'description':  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
            { 'title': 'Clean Energy', 'type': 'Model', 'description':  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
            { 'title': 'Renewable Stuff', 'type': 'Tutorial', 'description':  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
            { 'title': 'Healthy Cities', 'type': 'Dataset', 'description':  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
        ]

        return (
            <section id="dataList" className="section">
                <h2>Datasets and Models</h2>
                <ul>
                    {dataList.map(data => <li><DataCard data={data}/></li>)}
                </ul>
            </section>
        )
    }
}
