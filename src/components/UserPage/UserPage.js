import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './UserPage.css';
import PendingPals from '../PendingPals/PendingPals';

class UserPage extends Component {
  // this component doesn't do much to start, just renders some user info to the DOM
  render() {
    return (
      <>
        <div className="userdiv">
          <h1 id="welcome">Welcome, {this.props.store.user.name}!</h1>
          <LogOutButton className="log-in btn" />
        </div>
        <PendingPals />
      </>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
