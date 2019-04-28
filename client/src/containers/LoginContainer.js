import React, { Component } from "react";
import Button from "../components/Form/button";
import Input from "../components/Form/input";
import firebase, {auth, provider} from '../firebase';

const googleImg = require("./google_signin_buttons/web/1x/btn_google_signin_light_pressed_web.png");
    
class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null
        }
        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleClearLogin = this.handleClearLogin.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
          if (user) {
            this.setState({ user });
          } 
        });
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

    handleLogout() {
        auth.signOut()
        .then(() => {
          this.setState({
            user: null
          });
        });
      }
      handleLogin() {
        auth.signInWithPopup(provider) 
          .then((result) => {
            const user = result.user;
            this.setState({
              user
            });
          });
      }

    
    render() {
        return (
            <div className="container center" style={{ marginTop: 60 }}>
                {this.state.user ?
                  <button onClick={this.handleLogout}>Log Out</button>                
                  :
                  <button onClick={this.handleLogin}><img src={googleImg}></img></button>              
                }
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