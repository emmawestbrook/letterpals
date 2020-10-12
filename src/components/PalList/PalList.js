import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import PalTableItem from '../PalTableItem/PalTableItem';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PalList extends Component {
    state = {
        heading: 'Pal List',
    };

    componentDidMount() {
        const action = { type: 'GET_PALS' };
        this.props.dispatch(action);
    };



    render() {
        // let userPals = [];
        // for (let i = 0; i < this.props.store.pals; i++) {
        //     if (this.props.store.pals[i].pal1_id = this.props.store.user.id) {
        //         console.log('found one!', this.props.store.pals[i]);
        //     }
        // }



        return (
            <div>
                <h2>{this.state.heading}</h2>
                {JSON.stringify(this.props.store.pals)}
                <table>
                    <thead>
                        <tr>
                            <th>image</th>
                            <th>name</th>
                            <th>details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.store.pals.map((friendship, i) => {
                            return (<PalTableItem key={i} friendship={friendship} />);
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(PalList);
