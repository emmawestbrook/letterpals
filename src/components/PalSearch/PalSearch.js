import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PalSearch extends Component {
    state = {
        heading: 'Pal Search',
    };

    componentDidMount() {
        const action = { type: 'GET_ALL_USERS' };
        this.props.dispatch(action);
    };

    render() {
        return (
            <div>
                <h2>{this.state.heading}</h2>
                <Autocomplete
                    id="combo-box-demo"
                    options={this.props.store.allusers}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
            </div>
        );
    }
}

export default connect(mapStoreToProps)(PalSearch);
