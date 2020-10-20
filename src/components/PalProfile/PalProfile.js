import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Swal from 'sweetalert2';

import './PalProfile.css';
import AddLetter from '../AddLetter/AddLetter';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PalProfile extends Component {

    state = { showLetterForm: false };


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

    handleClick = () => {
        this.props.history.push('/myletters');
        // this.setState({
        //     showLetterForm: true
        // });

    }

    render() {
        return (
            <div className="profile">
                <div className="profileAvatar ">
                    <img src={this.props.store.palprofile.avatar} width="400" alt="avatar" className="img-circle" />
                    <h2 className="username">@ {this.props.store.palprofile.username}</h2>
                    <button className="btn" onClick={this.handleClick}>I sent them a letter!</button>
                    {/* {this.state.showLetterForm && <AddLetter />} */}
                    <button className="btn" onClick={this.handleDelete}>remove from pals</button>

                </div>
                <div className="profileInfo ">
                    <h1 className="name">{this.props.store.palprofile.name}</h1>
                    <h2 className="subhead">about</h2>
                    <p>{this.props.store.palprofile.about}</p>
                    <h2 className="subhead">address</h2>
                    <p>{this.props.store.palprofile.address}</p>
                </div>


            </div>
        );
    }
}

export default connect(mapStoreToProps)(PalProfile);
