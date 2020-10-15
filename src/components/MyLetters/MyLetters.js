import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class MyLetters extends Component {
    state = {
        heading: 'My Letters',
    };

    componentDidMount() {
        this.props.dispatch({ type: 'GET_LETTERS' });
    };

    render() {
        return (
            <div>
                {JSON.stringify(this.props.store.letters)}
            </div>
        );
    }
}

export default connect(mapStoreToProps)(MyLetters);
