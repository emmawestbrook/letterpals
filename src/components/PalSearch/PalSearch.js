import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Autocomplete from 'react-autocomplete';
// import Autocomplete from '@material-ui/lab/Autocomplete';
// import TextField from '@material-ui/core/TextField';
import OnePal from '../OnePal/OnePal';
import './PalSearch.css';
import { colors } from '@material-ui/core';

// Basic class component structure for React with default state
// value setup. When making a new component be sure to replace
// the component name TemplateClass with the name for the new
// component.
class PalSearch extends Component {
    state = {
        searchid: null,
        renderPal: false,
        notFound: null
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
        if (this.state.searchid != null) {
            const action = { type: 'GET_ONE_USER', payload: this.state.searchid };
            this.props.dispatch(action);
            this.setState({
                searchid: null,
                renderPal: true,
                notFound: false
            });
        }
        else {
            this.setState({
                searchid: null,
                renderPal: true,
                notFound: true
            });
        }
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1 className="title">pal search</h1>
                <div className="searchDiv">

                    <Autocomplete
                        getItemValue={(item) => item.id}
                        items={this.props.store.allusers}
                        renderItem={(item, isHighlighted) =>
                            <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                                {item.username}
                            </div>
                        }
                        value={(item) => item.id}
                        //onChange={(e) => value = e.target.value}
                        onSelect={(val) => this.handleChange(val)}
                    //onChange={(event, value) => this.handleChange(event, value)}
                    //onInputChange={(inputValue) => this.handleInputChange(inputValue)}
                    // value={this.props.store.allusers.id}
                    // onSelect={(e) => this.handleChange(e,)}
                    //onSelect={value => value = val}


                    // id="pal-search"
                    // options={this.props.store.allusers}
                    // getOptionLabel={(option) => option.username}
                    // //value={this.props.store.allusers.id}
                    // onChange={this.handleChange}
                    // //onInputChange={(inputValue) => this.handleInputChange(inputValue)}
                    // style={{ borderColor: 'orange', width: 600 }}
                    // renderInput={(params) => (
                    //     <TextField
                    //         {...params}
                    //         label="Search for username"
                    //         margin="normal"
                    //         variant="outlined"
                    //         InputProps={{ ...params.InputProps, type: 'search' }}
                    //     />)}
                    />


                    <button className="btn" onClick={this.handleSearch}>search</button>
                </div>
                {this.state.renderPal &&
                    (this.state.notFound ?
                        <p>"pal not found"</p> :
                        <OnePal />)}
            </div>
        );
    }
}

export default connect(mapStoreToProps)(PalSearch);
