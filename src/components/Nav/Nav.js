import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import mapStoreToProps from '../../redux/mapStoreToProps';
import headerlogo from './header.png';


const Nav = (props) => {
  let loginLinkData = {
    path: '/login',
    text: 'Login / Register',
  };

  if (props.store.user.id != null) {
    loginLinkData.path = '/user';
    loginLinkData.text = 'Home';
  }

  return (
    <div className="nav">
      <Link to="/home">
        <img src={headerlogo} height="80" />
        {/* <h2 className="nav-title">Letterpals</h2> */}
      </Link>
      <div className="nav-right">
        <Link className="nav-link" to={loginLinkData.path}>
          {/* Show this link if they are logged in or not,
          but call this link 'Home' if they are logged in,
          and call this link 'Login / Register' if they are not */}
          {loginLinkData.text}
        </Link>
        {/* Show the link to the info page and the logout button if the user is logged in */}
        {props.store.user.id && (
          <>
            <Link className="nav-link" to="/pallist">
              My Pals
            </Link>
            <Link className="nav-link" to="/myletters">
              My Letters
            </Link>
            <Link className="nav-link" to="/myprofile">
              My Profile
            </Link>
            <Link className="nav-link" to="/palsearch">
              Pal Search
            </Link>
          </>
        )}
        {/* Always show this link since the about page is not protected */}
        {/* <Link className="nav-link" to="/about">
          About
        </Link> */}
        {props.store.user.id && (<LogOutButton className="nav-link" />)}
      </div>
    </div>
  );
};

export default connect(mapStoreToProps)(Nav);
