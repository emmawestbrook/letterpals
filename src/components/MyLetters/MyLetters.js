import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import moment from 'moment'

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
            type: 'GET_LETTERS'
        });

        //this.letterSort(this.props.store.letters);

        // this.setState({
        //     fromMe: letters.fromMe,
        //     toMe: letters.toMe
        // });

    };

    // letterSort = (letters) => {
    //     let lettersFromMe = [];
    //     let lettersToMe = [];
    //     console.log('letters', letters);
    //     for (let i = 0; i < letters.length; i++) {
    //         if (letters[i].from_id === this.props.store.user.id) {
    //             lettersFromMe.push(letters[i]);
    //         }
    //         else if (letters[i].from_id === this.props.store.user.id) {
    //             lettersToMe.push(letters[i]);
    //         }
    //     }
    //     let myLetters = {
    //         fromMe: lettersFromMe,
    //         toMe: lettersToMe
    //     };
    //     console.log('my letters', myLetters);
    //     this.setState({
    //         fromMe: letters.fromMe,
    //         toMe: letters.toMe
    //     });
    //     return myLetters;
    // }

    render() {


        return (
            <div className="letters">
                <h2>letters to me</h2>
                {this.props.store.letters.map((letter) => <div className="lettersToMe letterRow">
                    {letter.to_id === this.props.store.user.id && letter.from_name}
                    {letter.to_id === this.props.store.user.id && moment(letter.postmark).format("MMM Do YY")}
                    {(letter.to_id === this.props.store.user.id && letter.recieved) ?
                        "got it" :
                        null}
                </div>)}
                <h2>letters from me</h2>
                {this.props.store.letters.map((letter) => <div className="lettersFromMe letterRow">
                    {letter.from_id === this.props.store.user.id ? letter.to_name : null}
                    {letter.from_id === this.props.store.user.id ? moment(letter.postmark).format("MMM Do YY") : null}
                    {(letter.from_id === this.props.store.user.id && letter.recieved) ?
                        "got it" :
                        null}
                </div>)}
            </div>
        );
    }
}

export default connect(mapStoreToProps)(MyLetters);
