import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

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
        console.log(this.state);
        console.log('ONEUSER.ID', this.props.store.oneuser);
        this.props.dispatch({
            type: 'ADD_PAL',
            payload: this.props.store.oneuser
        });
    }

    render() {
        return (
            <div className="palReturn formPanel">
                <h1>{this.props.store.oneuser.name}</h1>
                <h2 className="username">@{this.props.store.oneuser.username}</h2>
                {this.state.addPal ?
                    <p>pal added!</p> :
                    <button className="btn" onClick={this.handleClick}>add pal</button>
                }
            </div>
        );
    }
}

export default connect(mapStoreToProps)(TemplateClass);
