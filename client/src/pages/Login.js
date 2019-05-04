import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import "./styles.css";
import LoginContainer from "../containers/LoginContainer";
// import FullLogo from "../components/Logo"
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

axios.defaults.baseURL = "http://localhost:3001";

const fullLogo = require("../img/Artboard5.png");

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  // componentDidMount = () => {
  //   if(this.state.errors){

  //   }
  // }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("Button Pushed!")
    axios.post('/api/users/login', {
      email: this.state.email,
      password: this.state.password
     })
    .then((result) => {
      const userID = result.data.userData.id;
      console.log("Post result: " + result.data.token);
      localStorage.setItem('jwtToken', result.data.token);
      this.props.history.push('/main')
      // this.props.history.push('/')
    })
    .catch((error) => {
      this.setState({ errors: error.response.data });
      // console.log(error.response.data);
    })
  };

    render() {
      const { errors } = this.state;
      return (
        <div className="container">
        {/* <img src={fullLogo} className="logo" alt="Logo" style={{ marginTop: 20, align: "center" }} /> */}
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect"><KeyboardBackspaceIcon />
               Back to home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/signup">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
  