import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PalProfile extends Component {
    state = {
        heading: 'Pal Profile',
    };

    render() {
        return (
            <div>
                <h2>{this.props.store.palprofile.name}</h2>
                {JSON.stringify(this.props.store.palprofile)}
            </div>
        );
    }
}

export default connect(mapStoreToProps)(PalProfile);
