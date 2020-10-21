import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import PendingPalTableItem from '../PendingPalTableItem/PendingPalTableItem';
import './PendingPals.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PendingPals extends Component {
    state = {
        heading: 'Class Component',
    };

    componentDidMount() {
        const action = { type: 'GET_PENDING_PALS' };
        this.props.dispatch(action);
    };

    render() {
        return (
            <div >
                <div className="pplheader">
                    <div >pending pals</div>
                </div>
                <div className="pendingpallist">
                    <div className="plbody">
                        {this.props.store.pendingpals.map((pal) => {
                            return (<PendingPalTableItem pal={pal} userId={this.props.store.user.id} />);
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(PendingPals);
