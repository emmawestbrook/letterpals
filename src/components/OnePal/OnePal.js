import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class TemplateClass extends Component {
    state = {
        heading: 'Class Component',
    };

    render() {
        return (
            <div>
                <h1>onepal</h1>
                <h1>{this.props.store.oneuser.username}</h1>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(TemplateClass);
