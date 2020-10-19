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

        this.props.history.push(`/editprofile`);
    }

    render() {
        return (
            <div className="profile">
                <div className="profileAvatar ">
                    <img src={this.props.store.user.avatar} width="400" alt="avatar" className="img-circle" />
                    <h2 className="username">@ {this.props.store.user.username}</h2>
                    <button className="btn" onClick={this.handleClick}>edit my profile</button>

                </div>
                <div className="profileInfo ">
                    <h1 className="name">{this.props.store.user.name}</h1>
                    <h2>about</h2>
                    <p>{this.props.store.user.about}</p>
                    <h2>address</h2>
                    <p>{this.props.store.user.address}</p>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(MyProfile));
