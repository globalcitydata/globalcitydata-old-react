import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

export default class TemplateComponent extends Component {
    render() {
        return (
            <div>
                <p>I'm a new component</p>
            </div>
        )
    }
}

TemplateComponent.propTypes = {
    // Fill proptypes here
    // Example:
        // myProp: PropTypes.object.isRequired
}