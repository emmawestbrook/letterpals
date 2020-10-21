import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './UserPage.css';
import PendingPals from '../PendingPals/PendingPals';

class UserPage extends Component {
  componentDidMount() {
    const action = { type: 'GET_PENDING_PALS' };
    this.props.dispatch(action);
  };

  render() {
    return (
      <>
        <div className="userdiv">
          <h1 id="welcome">Welcome, {this.props.store.user.name}!</h1>
          <LogOutButton className="log-in btn" />
        </div>
        {this.props.store.pendingpals.length > 0 ?
          <PendingPals /> :
          <h2 className="nopals">no pending pals!</h2>}
      </>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStoreToProps)(UserPage);
