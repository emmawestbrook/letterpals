import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { withRouter } from 'react-router-dom';
// import '../PalList/PalList.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PendingPalTableItem extends Component {
    state = {
        pal_id:
            this.props.userId === this.props.pal.pal1_id ?
                this.props.pal.pal2_id :
                this.props.pal.pal1_id
    };

    componentDidMount() {
        console.log(this.state);
    };

    handleAdd = () => {
        this.props.dispatch({
            type: 'PAL_ACCEPT',
            payload: this.state
        });
    }

    handleDelete = () => {
        this.props.dispatch({
            type: 'DELETE_PAL',
            payload: this.state.pal_id
        });
    }

    render() {
        return (
            <div className="plrow" key={this.props.pal.id}>
                <div >{this.props.userId === this.props.pal.pal1_id ?
                    <img className="img-circle" src={this.props.pal.pal2_avatar} width="80" alt="avatar" /> :
                    <img className="img-circle" src={this.props.pal.pal1_avatar} width="80" alt="avatar" />
                } </div>
                <div >
                    {this.props.userId === this.props.pal.pal1_id ?
                        this.props.pal.pal2_name :
                        this.props.pal.pal1_name
                    }</div>
                <div ><button className="btn" onClick={this.handleAdd}>accept pal</button>
                    <button className="btn" onClick={this.handleDelete}>delete request</button> </div>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withRouter(PendingPalTableItem));
