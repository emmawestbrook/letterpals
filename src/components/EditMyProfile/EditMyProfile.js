import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import multer from 'multer';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class EditMyProfile extends Component {
    //These state values have to start as null so that the database only updates when there have actually been changes made by the user.
    //If no changes are made by the user, and the value gets to the database, then it will remain the same.
    state = {
        name: null,
        avatar: null,
        about: null,
        address: null
    };


    handleChange = (event, propertyName) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        })
        console.log('state is:', this.state);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'EDIT_USER',
            payload: this.state
        });
        this.props.history.push(`/myprofile`);
    }
    render() {
        return (

            <form className="formPanel" onSubmit={this.handleSubmit}>
                <h2>edit my profile</h2>
                <div>
                    <label htmlFor="name">
                        Name:
                    <input name="name" type="text" placeholder={this.props.store.user.name} onChange={(event) => this.handleChange(event, 'name')} />
                    </label>
                </div>
                <div>
                    <label htmlFor="about">
                        About:
                    <textarea name="about" type="text" rows="8" cols="42"
                            placeholder={this.props.store.user.about}
                            onChange={(event) => this.handleChange(event, 'about')} />
                    </label>
                </div>
                <div>
                    <label htmlFor="address">
                        Address:
                    <textarea name="about" type="text" rows="3" cols="42"
                            name="address" type="text"
                            placeholder={this.props.store.user.address}
                            onChange={(event) => this.handleChange(event, 'address')} />
                    </label>
                </div>
                <div>
                    <label htmlFor="avatar">
                        Avatar URL:
                    <input name="avatar" type="text" placeholder={this.props.store.user.avatar} onChange={(event) => this.handleChange(event, 'avatar')} />
                    </label>
                </div>

                <input className="btn" type="submit" name="submit" value="Save changes" />


            </form>
        );
    }
}

export default connect(mapStoreToProps)(EditMyProfile);
