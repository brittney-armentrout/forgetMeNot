import React, { Component } from "react";
// import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
// import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import CreateIcon from "@material-ui/icons/Create";

//DEV only, comment out for deploy
axios.defaults.baseURL = "http://localhost:3001";

const styles = theme => ({
    main: {
        width: "auto",
        display: "block",
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: "auto",
            marginRight: "auto",
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%",
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: "none",
    },
});


class NewLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {}
        };
    }

    componentDidMount = () => {
        if(this.state.errors) {
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();
        console.log("Look ma, I pushed a button!")
        axios.post("/api/users/login", {
            email: this.state.email,
            password: this.state.password
        })
        .then((result) => {
            const userID = result.data.userData._id;
            localStorage.setItem("jwtToken", result.data.token);
            this.props.history.push({
                pathname: '/main',
                state: { user: userID }
              })
        })
        .catch((error) => {
            this.setState({ errors: error.response.data });
        })
    };

    render() {
        const { classes } = this.props;
        const { errors } = this.state;

        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    {/* <Typography component="p">
                        <Button href="/" className={classes.button} color="primary">
                            <KeyboardBackspaceIcon />
                            Back to home
                        </Button> */}
                        {/* <Link to="/"><KeyboardBackspaceIcon />
                            Back to home
                        </Link> */}
                    {/* </Typography> */}
                    <Typography component="p">
                        Don't have an account? 
                        <Button href="/signup" className={classes.button} color="primary">
                            Register <CreateIcon style={{ marginLeft: 5 }} />
                        </Button>
                    </Typography>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Sign In
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={this.onSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input 
                                autoFocus
                                id="email"
                                name="email"
                                type="email"
                                autoComplete="email"
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input 
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                            />
                        </FormControl>
                        {/* <FormControlLabel   
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        /> */}
                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign in
                        </Button>
                    </form>
                </Paper>
            </main>
        );
    }






}

NewLogin.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewLogin);