import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';


import '../PalProfile/PalProfile.css';


// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class MyProfile extends Component {
    state = {
        heading: 'My Profile',
    };

    handleClick = () => {
        this.props.dispatch({
            type: 'EDIT_USER',
            payload: this.props.store.user.id
        });
        this.props.history.push(`/editprofile`);
    }

    render() {
        return (
            <div>
                <h1>{this.props.store.user.name}</h1>
                <h2 className="username">@{this.props.store.user.username}</h2>
                <p>{this.props.store.user.about}</p>
                <p>{this.props.store.user.address}</p>
                <button className="btn" onClick={this.handleClick}>edit my profile</button>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(MyProfile));
