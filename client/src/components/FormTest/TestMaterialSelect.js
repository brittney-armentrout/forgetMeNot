import React from "react";
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import Grid from "@material-ui/core/Grid";

const TestSelect = props => {
    let formControl = "form-control";

    if (props.touched && !props.valid) {
        formControl = "form-control control-error";
    }

    return (
        <div>  
            <Grid item xs={12} md={6}>
            <FormControl>
                <InputLabel htmlFor={props.name}>ChooseFriend</InputLabel>
                <Select
                    native
                    name={props.name}
                    value={props.value}
                    onChange={props.onChange}
                >
                <option value="" />
                {props.options.map(option => (
                    <option value={option.value}>{option.value}</option>
                ))}
                </Select>
            </FormControl>
            </Grid>
        </div>
    )
}

export default TestSelect;