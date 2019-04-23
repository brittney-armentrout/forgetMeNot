import React, { Component } from "react";
import Button from "../components/Form/button";
import Input from "../components/Form/input";

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            User: {
                username: "",
                password: ""
            }
        }
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleClearLogin = this.handleClearLogin.bind(this);
        this.handleLoginInput = this.handleLoginInput.bind(this);
    }

    handleLoginSubmit(event) {
        //event.preventDefault();
    }

    handleClearLogin(event) {
        event.preventDefault();
        this.setState({
            User: {
                username: "",
                password: ""
            }
        })
    }

    handleLoginInput(event) {
        let value = event.target.value;
        let name = event.target.name;
        this.setState ( prevState => {
            return {
                User : {
                    ...prevState.User, [name]: value 
                }
            }
          }, () => console.log(this.state.User));     
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleLoginSubmit}>
                {/* Username Input */}
                <Input 
                    inputType = {"text"}
                    title = {"Username"}
                    name = {"username"}
                    value = {this.state.User.username}
                    handleChange = {this.handleLoginInput}
                />
                {/* Password Input */}  
                <Input 
                    inputType = {"text"}
                    title = {"Password"}
                    name = {"password"}
                    value = {this.state.User.password}
                    handleChange = {this.handleLoginInput}
                />  
                {/* Submit */}
                <Button 
                    action = {this.handleLoginSubmit}  
                    type = {"primary"}
                    title = {"Submit"} 
                />     
            </form>
        );
    }

}

export default LoginContainer;