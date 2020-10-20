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
                <div className="pallist">
                    <div className="plheader">
                        <div >pal list</div>
                    </div>
                    <div className="plbody">
                        {this.props.store.pals.map((pal) => {
                            return (<PalTableItem pal={pal} userId={this.props.store.user.id} />);
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(PalList);
