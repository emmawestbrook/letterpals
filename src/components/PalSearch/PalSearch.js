import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import OnePal from '../OnePal/OnePal';
import './PalSearch.css';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PalSearch extends Component {
    state = {
        searchid: null,
        renderPal: false
    };

    componentDidMount() {
        const action = { type: 'GET_ALL_USERS' };
        this.props.dispatch(action);
    };

    handleChange = (event, values) => {
        this.setState({
            searchid: values.id
        })
        console.log(this.state);
    }

    handleSearch = () => {
        const action = { type: 'GET_ONE_USER', payload: this.state.searchid };
        this.props.dispatch(action);
        this.setState({
            searchid: null,
            renderPal: true
        })
        console.log(this.state);
    }
    render() {
        return (
            <div>
                <h2 className="title">pal search</h2>
                <div className="searchDiv">
                    <Autocomplete
                        id="pal-search"
                        options={this.props.store.allusers}
                        getOptionLabel={(option) => option.username}
                        //value={this.props.store.allusers.id}
                        onChange={this.handleChange}
                        //onInputChange={(inputValue) => this.handleInputChange(inputValue)}

                        style={{ width: 600 }}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="Search for username"
                                margin="normal"
                                variant="outlined"
                                InputProps={{ ...params.InputProps, type: 'search' }}
                            />)}
                    />
                    <button className="btn" onClick={this.handleSearch}>search</button>
                </div>
                {this.state.renderPal && <OnePal />}
            </div>
        );
    }
}

export default connect(mapStoreToProps)(PalSearch);
