import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PalTableItem extends Component {
    state = {
        pal_id:
            this.props.userId === this.props.pal.pal1_id ?
                this.props.pal.pal2_id :
                this.props.pal.pal1_id
    };

    componentDidMount() {
        console.log(this.state);
    };

    handleClick = () => {
        this.props.dispatch({
            type: 'FETCH_PAL',
            payload: this.state.pal_id
        });
        this.props.history.push(`/palprofile`);
    }

    render() {
        return (
            <tr key={this.props.pal.id}>
                <td>image </td>
                <td>
                    {this.props.userId === this.props.pal.pal1_id ?
                        this.props.pal.pal2_name :
                        this.props.pal.pal1_name
                    }</td>
                <td><button onClick={this.handleClick}>details</button> </td>
            </tr>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(PalTableItem));
