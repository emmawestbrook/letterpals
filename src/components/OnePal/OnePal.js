import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './OnePal.css';
import Swal from 'sweetalert2';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class TemplateClass extends Component {
    state = {
        addPal: false,
    };


    handleClick = () => {
        this.setState({ addPal: true });
        // console.log(this.state);
        // console.log('ONEUSER.ID', this.props.store.oneuser);

        // this.props.dispatch({
        //     type: 'ADD_PAL',
        //     payload: this.props.store.oneuser
        // });

        Swal.fire({
            title: 'add pal?',
            text: "they will be able to see your address!",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#9dac68',
            cancelButtonColor: '#e26d5c',
            confirmButtonText: 'yes, add pal!'
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                this.props.dispatch({
                    type: 'ADD_PAL',
                    payload: this.props.store.oneuser
                });
                Swal.fire('pal added!', 'taking you back to your pal list', 'success');
                //this.props.history.push(`/pallist`);
            }
        });
    }

    render() {
        return (
            <div className="palReturn">
                <div className="palpic">
                    <img src={this.props.store.oneuser.avatar} width="200" alt="avatar" className="profileimg" />
                    <h2 className="username">@ {this.props.store.oneuser.username}</h2>
                    {this.state.addPal ?
                        <p>pal added!</p> :
                        <button className="btn" onClick={this.handleClick}>add pal</button>
                    }
                </div>
                <div className="palinfo">
                    <h1>{this.props.store.oneuser.name}</h1>
                    <p>{this.props.store.oneuser.about}</p>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(TemplateClass);
