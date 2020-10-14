import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import PalTableItem from '../PalTableItem/PalTableItem';
import './PalList.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PalList extends Component {
    state = {
        heading: 'Pal List',
        palList: []
    };

    componentDidMount() {
        const action = { type: 'GET_PALS' };
        this.props.dispatch(action);
    };



    render() {

        return (
            <div>
                <h1>{this.state.heading}</h1>
                {/* {JSON.stringify(this.props.store.pals)} */}
                <table striped bordered hover>
                    <thead className="tbl-header">
                        <tr>
                            <th>image</th>
                            <th>name</th>
                            <th>details</th>
                        </tr>
                    </thead>
                    <tbody className="tbl-body">
                        {this.props.store.pals.map((pal) => {
                            return (<PalTableItem pal={pal} userId={this.props.store.user.id} />);
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(PalList);
