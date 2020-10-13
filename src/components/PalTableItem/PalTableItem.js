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
                <td>image </td>
                <td> 
                {this.props.userId === this.props.pal.pal1_id ?
                        this.props.pal.pal2_name :
                        this.props.pal.pal1_name
                }</td>
                <td><button>details</button> </td>
            </tr>
        );
    }
}

export default connect(mapStoreToProps)(PalTableItem);
