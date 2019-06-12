import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import API from "../utils/API";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import { InputLabel } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import DatePicker from "../components/FormTest/Pickers";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import CustomizedSnackbars from "../components/Snackbar/snackbar";


const styles = theme => ({
    layout: {
        width: "auto",
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)] : {
            width: 600,
            marginLeft: "auto",
            marginRight: "auto",
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3,
        },
    },
    buttons: {
        display: "flex",
        justifyContent: "flex-end",
    },
    saveBtn: {
        marginTop: theme.spacing.unit * 2,
    },
    uploadBtn: {
        marginTop: theme.spacing.unit * 3,
    },
    input: {
        display: "none",
    },
    occasionSelect: {
        marginTop: theme.spacing.unit * 2, 
    },
    dateSelect: {
        marginTop: theme.spacing.unit * 2.8,
    },
});

class AddFriendContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
                name: "",
                occasion: "",
                date: "",                             
                img: "",
                address: "",
                friendAdded: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    };

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleClear = event => {
        this.setState({
            name: "", 
            occasion: "", 
            date: "", 
            img: "",
            address: ""
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState( {friendAdded: false} );
        const formData = {};      
        for (let formElementId in this.state) {
            formData[formElementId] = this.state[formElementId];
        }
        console.log(formData);
        
        const userID = this.props.userID;       
        API.saveFriend(userID, formData)
            .then((response) => {
                this.setState( {friendAdded: true} );
                this.handleClear();
            })
        
        
    }
  
    render() {
        const { classes } = this.props;
        
        return (
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h5" color="primary" align="center">
                        Add New Friend
                    </Typography> 
                    <form onSubmit={this.handleFormSubmit}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="name"
                                name="name"
                                label="Friend Name"
                                margin="normal"
                                fullWidth
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                id="address"
                                name="address"
                                label="Friend Address"
                                fullWidth
                                margin="normal"
                                value={this.state.address}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel htmlFor="occasion" className={classes.occasionSelect}>Occasion</InputLabel>
                            <Select
                                native
                                name="occasion"
                                value={this.state.occasion}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: "occasion",
                                    id: "occasion",
                                }}
                                fullWidth
                                margin="normal"
                            >
                                <option value="" />
                                <option value={"birthday"}>Birthday</option>
                                <option value={"anniversary"}>Anniversary</option>
                                <option value={"holiday"}>Holiday</option>
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6} className={classes.dateSelect}>
                            <DatePicker 
                                id="date"
                                name="date"
                                label="Occasion Date"
                                type="date"
                                margin="normal"
                                defaultValue=""
                                value={this.state.date}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <input  
                                accept="image/*"
                                className={classes.input}
                                id="imgFileBtn"
                                multiple
                                type="file"
                            />
                            <label htmlFor="imgFileBtn">
                                <Button component="span" className={classes.uploadBtn}>
                                    Upload image
                                </Button>
                            </label>
                        </Grid>
                        <Grid item xs={12} align="right">
                             <Button 
                                variant="contained" 
                                size="small"
                                color="primary"
                                className={classes.saveBtn}
                                type="submit"
                                value="Submit"
                            >
                            Save
                            <SaveIcon className={classNames(classes.rightIcon, classes.iconSmall)} />                        
                          </Button> 
                        </Grid>
                    </Grid>
                    </form>
                </Paper>
                {this.state.friendAdded 
                             ? <CustomizedSnackbars variant= {"success"} message="Friend Added!"></CustomizedSnackbars> :
                              console.log("Something went wrong adding friend.")}
            </main>

        );
    };

};


AddFriendContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};
    
export default withStyles(styles)(AddFriendContainer);

























   












