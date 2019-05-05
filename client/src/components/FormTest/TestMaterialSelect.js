import React from "react";
import InputLabel from '@material-ui/core/InputLabel';
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
        <FormControl>
            <InputLabel htmlFor={props.label}>{props.label}</InputLabel>
                <Select
                    native
                    name={props.name}
                    value={props.value}
                    label={props.label}
                    onChange={props.onChange}
                >
                <option value="" />
                {props.options.map(option => (
                    <option value={option.value}>{option.value}</option>
                ))}
                </Select>
        </FormControl>
  
    )
}

export default TestSelect;