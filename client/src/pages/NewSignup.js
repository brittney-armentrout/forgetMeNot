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
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import CreateIcon from "@material-ui/icons/Create";
import CustomizedSnackbars from "../components/Snackbar/snackbar";


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

class NewSignup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {},
            errorMessage: [],
            hasErrors: false
        };
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    errorChecker = () => {
        if(Object.keys(this.state.errors).length != 0){
            this.setState( {hasErrors: true} )
            console.log("You have errors!")
            const allErrorMessages = Object.values(this.state.errors);
            this.setState( {errorMessage: allErrorMessages[0]} )
        } else {
            console.log("No Errors!")
        }
    }
    
    onSubmit = e => {
        e.preventDefault();
        this.setState( {hasErrors: false} );
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        console.log(newUser);
        axios.post('/api/users/register', {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        })
        .then((result) => {
            this.props.history.push('/')
        })
        .catch((error) => {
            console.log(error.response.data);
            this.setState( {errors: error.response.data} );
            this.errorChecker();
        })
    };

    render() {
        const { classes } = this.props;
        const { errors } = this.state;

        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Typography component="p">
                        <Button href="/" className={classes.button} color="primary">
                            <KeyboardBackspaceIcon />
                            Back to login
                        </Button>
                    </Typography>
                    <Avatar className={classes.avatar}>
                        <CreateIcon />
                    </Avatar>
                    <Typography component="h1" variant="h4">
                        Sign Up
                    </Typography>
                    <form className={classes.form} noValidate onSubmit={this.onSubmit}>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Name</InputLabel>
                            <Input 
                                autoFocus
                                id="name"
                                name="name"
                                type="text"
                                onChange={this.onChange}
                                value={this.state.name}
                                error={errors.name}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input 
                                id="email"
                                name="email"
                                type="email"
                                onChange={this.onChange}
                                value={this.state.email}
                                error={errors.email}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Password</InputLabel>
                            <Input 
                                id="password"
                                name="password"
                                type="password"
                                onChange={this.onChange}
                                value={this.state.password}
                                error={errors.password}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Confirm Password</InputLabel>
                            <Input 
                                id="password2"
                                name="password2"
                                type="password"
                                onChange={this.onChange}
                                value={this.state.password2}
                                error={errors.password2}
                            />
                        </FormControl>
                        <Button 
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                        {this.state.hasErrors 
                             ? <CustomizedSnackbars message={this.state.errorMessage}></CustomizedSnackbars> :
                              console.log("No Errors!")}
                    </form>
                </Paper>
            </main>
        )
    }





}

NewSignup.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(NewSignup);