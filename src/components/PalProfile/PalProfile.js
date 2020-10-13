import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

import './PalProfile.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PalProfile extends Component {


    handleDelete = () => {
        console.log(this.props.store.palprofile.id);
        this.props.dispatch({
            type: 'DELETE_PAL',
            payload: this.props.store.palprofile.id
        });
        //this.props.history.push(`/palprofile`);
    }

    render() {
        return (
            <div>
                <h1>{this.props.store.palprofile.name}</h1>
                <h2 className="username">@{this.props.store.palprofile.username}</h2>
                <p>{this.props.store.palprofile.about}</p>
                <p>{this.props.store.palprofile.address}</p>
                <button className="btn" onClick={this.handleDelete}>remove from pals</button>

            </div>
        );
    }
}

export default connect(mapStoreToProps)(PalProfile);
