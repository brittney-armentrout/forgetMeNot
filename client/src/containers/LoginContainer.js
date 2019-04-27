import React, { Component } from "react";
import Button from "../components/Form/button";
import Input from "../components/Form/input";

const googleImg = require("./google_signin_buttons/web/1x/btn_google_signin_light_pressed_web.png");
    
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
        // API.login()
     
        
    }

    // loadFriendDetail = () => {
    //     API.getFriendDetail()
    //         .then(res => this.setState({ friends: res.data }))
    //         .catch(err => console.log(err))
    // } 

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
            <div className="container center" style={{ marginTop: 60 }}>
                <btn className="loginBtn" onClick={() => this.handleLoginSubmit}>
                    <img src={googleImg}></img>
                </btn>
            {/* <form className="card col s6 z-depth-3" onSubmit={this.handleLoginSubmit}> */}
                {/* Username Input */}
                {/* <Input 
                    inputType = {"text"}
                    title = {"Username"}
                    name = {"username"}
                    value = {this.state.User.username}
                    handleChange = {this.handleLoginInput}
                /> */}
                {/* Password Input */}  
                {/* <Input 
                    inputType = {"text"}
                    title = {"Password"}
                    name = {"password"}
                    value = {this.state.User.password}
                    handleChange = {this.handleLoginInput}
                />   */}
                {/* Submit */}
                {/* <Button 
                    action = {this.handleLoginSubmit}  
                    type = {"primary"}
                    title = {"Submit"} 
                />     
            </form> */}
            </div>
        );
    }

}

export default LoginContainer;