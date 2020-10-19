import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import './AddLetter.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class AddLetter extends Component {
    state = {
        from_id: this.props.store.user.id,
        to_id: null,
        postmark: null,
        recieved: false
    };

    handleChange = (event, propertyName) => {
        this.setState({
            ...this.state,
            [propertyName]: event.target.value
        })
        console.log('state is:', this.state);
    }

    handleSubmit = (event) => {
        //event.preventDefault();
        console.log('handlesubmit clicked');
        this.props.dispatch({
            type: 'ADD_LETTER',
            payload: this.state
        });
        this.setState({
            from_id: this.props.store.user.id,
            to_id: null,
            postmark: null,
            recieved: false
        });
    }

    render() {
        return (
            <div className="letterFormPanel">
                <h2>Add letter</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="inputs">
                        <label className="letterInput" htmlFor="to">To:</label>

                        <select name="to" required onChange={(event) => this.handleChange(event, 'to_id')}>
                            <option key={0} value={null}> </option>
                            {this.props.pals.map((pal) =>
                                pal.pal1_id === this.props.store.user.id ?
                                    <option key={pal.pal2_id} value={pal.pal2_id}>{pal.pal2_name}</option> :
                                    <option key={pal.pal1_id} value={pal.pal1_id}>{pal.pal1_name}</option>
                            )}
                        </select>

                        <label className="letterInput" htmlFor="postmark">Sent on:</label>

                        <input name="postmark" type="date"
                            value={this.state.postmark}
                            required
                            placeholder="postmark date"
                            onChange={(event) => this.handleChange(event, 'postmark')} />
                        <button className="sendbtn btn" type="submit" name="submit" >send letter!</button>
                    </div>

                </form>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(AddLetter);