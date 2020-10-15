import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';

import Table from 'react-bootstrap/Table';


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
            <div className="plrow" key={this.props.pal.id}>
                <div >{this.props.userId === this.props.pal.pal1_id ?
                    <img src={this.props.pal.pal2_avatar} width="60" alt="avatar" /> :
                    <img src={this.props.pal.pal1_avatar} width="60" alt="avatar" />
                } </div>
                <div >
                    {this.props.userId === this.props.pal.pal1_id ?
                        this.props.pal.pal2_name :
                        this.props.pal.pal1_name
                    }</div>
                <div ><button className="btn" onClick={this.handleClick}>details</button> </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(PalTableItem));
