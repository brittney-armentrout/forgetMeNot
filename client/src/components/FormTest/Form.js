import React, { Component } from "react";
import TextInput from "./TextInput";
import validate from "./Validate";
// import Select from "./SelectOption.js";
import API from "../../utils/API";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import TestSelect from "./TestMaterialSelect";
import { Paper, Grid } from "@material-ui/core";

const formFont = "'Roboto', sans-serif";


class FormComponent extends Component {
    constructor () {
        super();
    
        this.state = {
            formIsValid: false,
            formControls: {

                gift: {
                    value: "",
                    placeholder: "Gift",
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true
                    }
                },
                friend: {
                    value: "",
                    placeholder: "Choose Friend",
                    valid: false,
                    touched: false,
                    validationRules: {
                        isRequired: true,
                    },
                    options: [
                        { value: "friend1", displayValue: "Friend1"},
                        { value: "friend2", displayValue: "Friend2"}
                    ]
                },
                file: {
                    value: "",
                    valid: false,
                    touched: false,
                    validationRules: {
                        isRequired: false,
                    }
                },
            }
        }
    }

    componentDidMount() {
        this.loadFriends()
    };

    loadFriends = () => {
        API.getFriends()
            .then(res => this.setState({ friends: res.data }))
            .catch(err => console.log(err))
    }

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;

        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls[name]
        };
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

        updatedControls[name] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }

        this.setState({
                formControls: updatedControls,
                FormIsValid: formIsValid
        });
    }

    formSubmitHandler = () => {
        const formData = {};
        for (let formElementId in this.state.formControls) {
            formData[formElementId] = this.state.formControls[formElementId].value;
        }
        console.dir(formData);
    }

    render() {
        return (
            <div className="Annoying">
                <Grid item xs={12}>
                <Paper elevation={5}>
                <TextInput
                    name="gift"
                    placeholder={this.state.formControls.gift.placeholder}
                    value={this.state.formControls.gift.value}
                    onChange={this.handleChange}
                    touched={this.state.formControls.gift.touched}
                    valid={this.state.formControls.gift.valid}
                />

                {/* <Select 
                    name="friend"
                    value={this.state.formControls.friend.value}
                    onChange={this.handleChange}
                    options={this.state.formControls.friend.options}
                    touched={this.state.formControls.friend.touched}
                    valid={this.state.formControls.friend.valid}
                /> */}
                {/* <FormControl>
                    <InputLabel>Hi</InputLabel>
                    <Select>
                        <MenuItem value="red">
                            Red
                        </MenuItem>
                    </Select>
                </FormControl> */}

                <TestSelect 
                    name="friend"
                    value={this.state.formControls.friend.value}
                    onChange={this.handleChange}
                    options={this.state.formControls.friend.options}
                    touched={this.state.formControls.friend.touched}
                    valid={this.state.formControls.friend.valid}
                />

                <input name="img" type="file" ref={this.fileInput} />
                
                <button 
                    onClick={this.formSubmitHandler}
                    // disabled={!this.state.formIsValid}
                    >Submit
                </button>
                </Paper>
                </Grid>
            </div>
        );
    }
}


export default FormComponent;