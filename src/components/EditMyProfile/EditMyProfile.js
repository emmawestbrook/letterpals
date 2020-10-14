import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class EditMyProfile extends Component {
    state = {
        name: '',
        about: '',
        address: '',
        avatar: ''
    };


    handleChange = (event, propertyName) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        })
        console.log('state is:', this.state);

    }
    render() {
        return (
            <div>
                <label htmlFor="name">
                    Name:
                    <input name="name" type="text" placeholder={this.props.store.user.name} onChange={(event) => this.handleChange(event, 'name')} />
                </label>
                <label htmlFor="about">
                    About:
                    <input name="about" type="text" placeholder={this.props.store.user.about} onChange={(event) => this.handleChange(event, 'about')} />
                </label>
                <label htmlFor="address">
                    Address:
                    <input name="address" type="text" placeholder={this.props.store.user.address} onChange={(event) => this.handleChange(event, 'address')} />
                </label>
                <label htmlFor="avatar">
                    Avatar URL:
                    <input name="avatar" type="text" placeholder={this.props.store.user.avatar} onChange={(event) => this.handleChange(event, 'avatar')} />
                </label>


            </div>
        );
    }
}

export default connect(mapStoreToProps)(EditMyProfile);
