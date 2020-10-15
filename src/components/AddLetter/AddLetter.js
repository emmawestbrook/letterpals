import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AddLetter extends Component {
    state = {
        pals: 'Class Component',
    };

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_PALS'
        });
        console.log('pals in addletter', this.props.pals);
    }

    render() {
        return (
            <div className="formPanel">
                <h2>Add letter</h2>
                <label htmlFor="to">
                    To:
                    <select onChange={(event) => this.handleChange(event, 'to_id')}>
                        {this.props.pals.map((pal) =>
                            <option key={pal.pal1_id} value={pal.pal1_id}>{pal.pal1_name}</option>)}
                    </select>
                </label>
                <label htmlFor="address">
                    Address:
                    <textarea name="about" type="text" rows="3" cols="42"
                        name="address" type="text"
                        placeholder={this.props.store.user.address}
                        onChange={(event) => this.handleChange(event, 'address')} />
                </label>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AddLetter);