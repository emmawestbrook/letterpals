import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import OnePal from '../OnePal/OnePal';
import './PalSearch.css';
import { withStyles } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

const styles = {
    root: {
        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#9dac68"
        },
        "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#8d5f67"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#64474a"
        },
        "& .MuiOutlinedInput-input": {
            color: "#9dac68"
        },
        "&:hover .MuiOutlinedInput-input": {
            color: "#8d5f67"
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
            color: "#64474a"
        },
        "& .MuiInputLabel-outlined": {
            color: "#9dac68"
        },
        "&:hover .MuiInputLabel-outlined": {
            color: "#8d5f67"
        },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: "#64474a"
        }
    }
};


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
        const classes = this.props.classes;
        return (
            <div>
                <h1 className="title">pal search</h1>
                <div className="searchDiv">

                    <Autocomplete className={classes.root}
                        freeSolo
                        id="pal-search"
                        options={this.props.store.allusers}
                        getOptionLabel={(option) => option.username}
                        //value={this.props.store.allusers.id}
                        onChange={this.handleChange}
                        //onInputChange={(inputValue) => this.handleInputChange(inputValue)}
                        style={{ width: 600 }}
                        renderInput={(params) => (
                            <TextField className={classes.input}
                                {...params}
                                label="Search for username"
                                margin="normal"
                                variant="outlined"
                                InputProps={{ ...params.InputProps, type: 'search' }}
                            />)}
                    />


                    <button className="btn" onClick={this.handleSearch}>search</button>
                </div>
                {this.state.renderPal &&
                    (this.state.notFound ?
                        <h2 className="title">pal not found</h2> :
                        <OnePal />)}
            </div>
        );
    }
}

export default connect(mapStoreToProps)(withStyles(styles)(PalSearch));
