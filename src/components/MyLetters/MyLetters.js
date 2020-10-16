import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import moment from 'moment'
import AddLetter from '../AddLetter/AddLetter';
import Swal from 'sweetalert2';


import './MyLetters.css';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class MyLetters extends Component {
    state = {
        toggleLetter: false,
    };

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_LETTERS_TO'
        });
        this.props.dispatch({
            type: 'GET_LETTERS_FROM'
        });
        this.props.dispatch({
            type: 'GET_PALS'
        });
        // this.setState({ reload: false });


    };

    onClick = (e) => {
        let letter = e.target.value;
        Swal.fire({
            title: 'this letter was delivered?',
            text: "you won't be able to undo this action!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#9dac68',
            cancelButtonColor: '#e26d5c',
            confirmButtonText: 'yes, i got it!'
        }).then((result) => {
            if (result.isConfirmed) {
                this.props.dispatch({
                    type: 'UPDATE_LETTER_TO',
                    payload: letter
                });
                Swal.fire('another letter safely delivered!', '', 'success');
                this.setState({ toggleLetter: !this.state.toggleLetter }, () => {
                    console.log(this.state,);
                });
            }
        });


    }

    render() {


        return (
            <div>
                <AddLetter pals={this.props.store.pals} />

                <div className="letters">
                    <h2>letters to me</h2>
                    {this.props.store.lettersto.map((letter) => <div className="lettersToMe letterRow" key={letter.letter_id}>
                        <div>{letter.from_name}</div>
                        <div>{moment(letter.postmark).format("MMM Do YY")}</div>
                        <div>{letter.recieved ? "got it" :
                            <button className="btn"
                                onClick={this.onClick}
                                value={letter.letter_id}>i got it!</button>}</div>
                    </div>)}
                    <h2>letters from me</h2>
                    {this.props.store.lettersfrom.map((letter) => <div className="lettersFromMe letterRow" key={letter.letter_id}>
                        <div>{letter.to_name}</div>
                        <div>{moment(letter.postmark).format("MMM Do YY")}</div>
                        <div>{letter.recieved ? "got it" : "hasn't arrived yet"}</div>

                    </div>)}
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(MyLetters);
