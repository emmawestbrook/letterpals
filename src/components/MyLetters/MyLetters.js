import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import moment from 'moment'
import AddLetter from '../AddLetter/AddLetter';

import './MyLetters.css';
// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class MyLetters extends Component {
    state = {
        fromMe: [],
        toMe: []
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


    };

    render() {


        return (
            <div>
                <AddLetter pals={this.props.store.pals} />

                <div className="letters">
                    <h2>letters to me</h2>
                    {this.props.store.lettersto.map((letter) => <div className="lettersToMe letterRow" key={letter.letter_id}>
                        {letter.from_name}
                        {moment(letter.postmark).format("MMM Do YY")}
                        {letter.recieved ? "got it" : <button className="btn">i got it!</button>}
                    </div>)}
                    <h2>letters from me</h2>
                    {this.props.store.lettersfrom.map((letter) => <div className="lettersFromMe letterRow" key={letter.letter_id}>
                        {letter.to_name}
                        {moment(letter.postmark).format("MMM Do YY")}
                        {letter.recieved ? "got it" : "hasn't arrived yet"}

                    </div>)}
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(MyLetters);
