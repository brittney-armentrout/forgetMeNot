import React, { Component } from "react";
// import "./styles.css";

//Import Components
// import TextArea from "../components/TextArea";
// import Select from "../components/Form/select";
import Button from "../components/Form/button";
import Input from "../components/Form/input";



class FormContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newUser: {
                name: " ",
                email: " ",
                username: " ",
                password: " "
            },

            genderOptions: ["Male", "Female", "Other", "Prefer Not to Say"],
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
    }

    handleFormSubmit(event) {
        //makes any ajax calls to the server (?? if necessary) or axios calls to DB
        // event.preventDefault();
        // let userData = this.state.newUser;
    }

    handleClearForm(event) {
        //Resetting form logic
        event.preventDefault();
        this.setState({
            newUser: {
                name: "",
                email: "",
                username: "",
                password: ""
            }
        })
    }

    //Create a generic handler method for all <Input /> components
        //The setState accepts either an object or an updater function with "(prevState, props) => stateChange"
        //The prevState object holds the up to date value of the previous state, so we merge the updated values w/ the previous state

    handleInput(event) {
        let value = event.target.value;
        let name = event.target.name;
        this.setState ( prevState => {
            return {
                newUser : {
                        ...prevState.newUser, [name]: value
                    }
            }
        }, () => console.log(this.state.newUser))
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleFormSubmit}>
                {/* Name Input */}
                <Input 
                    inputType = {"text"}
                    title = {"Name"}
                    name = {"name"}
                    value = {this.state.newUser.name}
                    placeholder = {"Enter your name"}
                    handleChange = {this.handleInput}
                /> 
                {/* Email Input */}
                <Input 
                    inputType = {"text"}
                    title = {"Email"}
                    name = {"email"}
                    value = {this.state.newUser.email}
                    placeholder = {"Enter your email"}
                    handleChange = {this.handleInput}
                /> 
                {/* Username */}
                <Input 
                     inputType = {"text"}
                     title = {"Username"}
                     name = {"username"}
                     value = {this.state.newUser.username}
                     placeholder = {"Enter your desired username"}
                     handleChange = {this.handleInput}
                /> 
                {/* Password */}
                <Input 
                    inputType = {"text"}
                    title = {"Password"}
                    name = {"password"}
                    value = {this.state.newUser.password}
                    placeholder = {"Enter your desired password"}
                    handleChange = {this.handleInput}
                /> 
                {/* Submit */}
                <Button 
                    action = {this.handleFormSubmit}
                    type = {"primary"}
                    title = {"Submit"}
                    // style = {buttonStyle}
                />{" "}               
            </form>
        );
    }
    
}

export default FormContainer;





//FormContainer is a container component that renders all of the form elements and handles all of the business logic. 
//We call it a container component because it takes care of updating the state of the form, handling form submission, and 
//making API calls/dispatching Redux actions. The dumb components or presentational components are concerned with how things 
//look and contain the actual DOM markup. These components receive data and callbacks exclusively as props.