import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Swal from 'sweetalert2';

import './PalProfile.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PalProfile extends Component {


    handleDelete = () => {
        console.log(this.props.store.palprofile.id);
        Swal.fire({
            title: 'are you sure?',
            text: "this pal won't be able to see your profile anymore!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#9dac68',
            cancelButtonColor: '#e26d5c',
            confirmButtonText: 'yes, remove pal!'
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                this.props.dispatch({
                    type: 'DELETE_PAL',
                    payload: this.props.store.palprofile.id
                });
                Swal.fire('pal removed!', '', 'success');
                this.props.history.push(`/pallist`);
            }
        });
    }

    render() {
        return (
            <div>

                <div>
                    <h1>{this.props.store.palprofile.name}</h1>
                    <h2 className="username">@{this.props.store.palprofile.username}</h2>
                    <img src={this.props.store.palprofile.avatar} width="200" alt="profile image" />
                    <p>{this.props.store.palprofile.about}</p>
                    <p>{this.props.store.palprofile.address}</p>
                    <button className="btn" onClick={this.handleDelete}>remove from pals</button>
                </div>
                <div>

                </div>

            </div>
        );
    }
}

export default connect(mapStoreToProps)(PalProfile);
