import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PalTableItem extends Component {
    state = {
        heading: 'Pal Table Item',
    };

    render() {
        return (
            <tr>
                <td>{JSON.stringify(this.props.friendship)}</td>
            </tr>
        );
    }
}

export default connect(mapStoreToProps)(PalTableItem);
