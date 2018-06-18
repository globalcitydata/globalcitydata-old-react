import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class DataDetail extends Component {
    render() {

        let dataList = this.props.dataList;
        
        let friends = this.props.datas.filter(data => data.friend === true);
        let nonFriends = this.props.datas.filter(data => data.friend !== true);

        return (
            <div>
                <h2>Friends Data</h2>
                <ul>
                    {/* key must be unique */}
                    {friends.map(data => <li key={data.name}> My friend is {data.name}</li>)}
                </ul>
                <hr />
                <h2>Non Friends Data</h2>
                <ul>
                    {/* key must be unique */}
                    {nonFriends.map(data => <li key={data.name}> My non friend is {data.name}</li>)}
                </ul>
            </div>
        )
    }
}

DataDetail.propTypes = {
    type: PropTypes.string.isRequired,
    tags: {
        params: PropTypes.array.isRequired,
        outcomes: PropTypes.array.isRequired,
        spatialScales: PropTypes.array.isRequired,
        temporalScales: PropTypes.array.isRequired,
        worldRegions: PropTypes.array.isRequired
    },
    context: PropTypes.string.isRequired,
    keyTakeaways: PropTypes.string.isRequired,
    sampleUsesAndVisualizations: PropTypes.string.isRequired,
    technicalDetails: PropTypes.string.isRequired,
    applicableModels: PropTypes.string.isRequired,
    relevantPublications: PropTypes.array.isRequired
}