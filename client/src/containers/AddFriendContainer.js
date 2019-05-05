import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Input from "../components/Form/input";
import API from "../utils/API";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TestSelect from "../components/FormTest/TestMaterialSelect";
import TextInput from "../components/FormTest/TextInput";
import validate from "../components/FormTest/Validate";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import { FormControl, InputLabel } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import DatePicker from "../components/FormTest/Pickers";
import TextField from "@material-ui/core/TextField";

const listFont = "'Roboto', sans-serif";

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
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
    },
})

class AddFriendContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formIsValid: false,
            formControls: {
                friend: {
                    value: "",
                    placeholder: "Friend Name",
                    valid: false,
                    touched: false,
                    validationRules: {
                        isRequired: true,
                    },
                },
                occasions: {
                    value: "",
                    placeholder: "Add an Occasion",
                    valid: false,
                    touched: false,
                    validationRules: {
                        isRequired: true,
                    },
                    options: [
                        { value: "Birthday", displayValue: "Birthday" },
                        { value: "Anniversary", displayValue: "Anniversary" },
                        { value: "Graduation", displayValue: "Graduation" },
                        { value: "Holiday", displayValue: "Holiday" },
                        { value: "Other", displayValue: "Other" },
                    ]
                },
                img: {
                    value: "",
                    valid: false,
                    touched: false,
                    validationRules: {
                        isRequired: false,
                    },
                }
                //consider adding Gifts as well
            }
        }
    }

    formSubmitHandler = () => {
        const formData = {};
        for (let formElementId in this.state.formControls) {
            formData[formElementId] = this.state.formControls[formElementId].value;
        }
        
        console.log(formData);
        console.log(formData.friend);
        console.log(formData.occasions);
        console.log(formData.img);
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
        };

        this.setState({
            formControls: updatedControls,
            FormIsValid: formIsValid
        });
    }


    render() {
        const { classes } = this.props;
        
        return (
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h5" color="primary" align="center">
                        Add New Friend
                    </Typography> 
                    <Grid container spacing={24}>
                        {/* <Grid item xs={12} sm={12}> */}
                            {/* <TextInput 
                                label={this.state.formControls.friend.placeholder}
                                type="text"
                                name="friend"
                                value={this.state.formControls.friend.value}
                                onChange={this.handleChange}
                                touched={this.state.formControls.friend.touched}
                                valid={this.state.formControls.friend.valid}
                            /> 
                        </Grid> */}
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="name"
                                name="name"
                                label="Friend Name"
                                fullWidth
                                value={this.state.formControls.friend.value}
                                touched={this.state.formControls.friend.touched}
                                valid={this.state.formControls.friend.valid}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                id="address1"
                                name="address1"
                                label="Friend Address Line 1"
                                fullWidth
                                value={this.state.formControls.friend.value}
                                touched={this.state.formControls.friend.touched}
                                valid={this.state.formControls.friend.valid}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="Friend Address Line 2"
                                fullWidth
                                value={this.state.formControls.friend.value}
                                touched={this.state.formControls.friend.touched}
                                valid={this.state.formControls.friend.valid}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="city"
                                name="city"
                                label="City"
                                fullWidth
                                value={this.state.formControls.friend.value}
                                touched={this.state.formControls.friend.touched}
                                valid={this.state.formControls.friend.valid}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                id="state"
                                name="state"
                                label="State/Province/Region"
                                fullWidth
                                value={this.state.formControls.friend.value}
                                touched={this.state.formControls.friend.touched}
                                valid={this.state.formControls.friend.valid}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TestSelect 
                                name="occasions"
                                label="Occasion"
                                fullWidth
                                value={this.state.formControls.occasions.value}
                                onChange={this.handleChange}
                                options={this.state.formControls.occasions.options}
                                touched={this.state.formControls.occasions.touched}
                                valid={this.state.formControls.occasions.valid}
                            /> 
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <DatePicker 
                                id="date"
                                label="Occasion Date"
                                type="date"
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TestSelect 
                                name="occasions"
                                label="Occasion"
                                fullWidth
                                value={this.state.formControls.occasions.value}
                                onChange={this.handleChange}
                                options={this.state.formControls.occasions.options}
                                touched={this.state.formControls.occasions.touched}
                                valid={this.state.formControls.occasions.valid}
                            /> 
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <DatePicker 
                                id="date"
                                label="Occasion Date"
                                type="date"
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TestSelect 
                                name="occasions"
                                label="Occasion"
                                fullWidth
                                value={this.state.formControls.occasions.value}
                                onChange={this.handleChange}
                                options={this.state.formControls.occasions.options}
                                touched={this.state.formControls.occasions.touched}
                                valid={this.state.formControls.occasions.valid}
                            /> 
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <DatePicker 
                                id="date"
                                label="Occasion Date"
                                type="date"
                                defaultValue=""
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Typography variant="subheading" color="inherit" style={{ marginTop: 20 }}>
                                Upload a picture:
                                <input name="img" type="file" ref={this.fileInput} style={{ marginTop: 10 }} />
                            </Typography> 
                        </Grid>
                        <Grid item xs={12} sm={6}>
                             <Button 
                                variant="contained" 
                                size="large"
                                color="primary"
                                className={classes.button}
                                onClick={this.formSubmitHandler}
                            >
                            Save
                            <SaveIcon className={classNames(classes.rightIcon, classes.iconSmall)} />                        
                          </Button> 
                        </Grid>
                    </Grid>
                </Paper>
            </main>



            // <div className={classes.root}>
              
            //     <Grid
            //         container
            //         spacing={0}
            //         direction="row"
            //         justify="center"
            //         alignItems="center"
            //         style={{ minHeight: 500 }}
            //     >
            //     {/* <Paper style={{ paddingLeft: 25, paddingBottom: 25 }}> */}
            //         <Grid item xs={12}>
            //                 <Typography variant="h3" color="primary" style={{ marginBottom: 30, fontSize: 55 }}>
            //                     Add New Friend
            //                 </Typography>  
            //         </Grid>
            //         <Grid item xs={12} className={classes.formItems}>
            //                 <TextInput 
            //                     label={this.state.formControls.friend.placeholder}
            //                     type="text"
            //                     name="friend"
            //                     value={this.state.formControls.friend.value}
            //                     onChange={this.handleChange}
            //                     touched={this.state.formControls.friend.touched}
            //                     valid={this.state.formControls.friend.valid}
            //                 /> 
            //         </Grid>
            //         <Grid item xs={6} className={classes.formItems}>
            //                 <TestSelect 
            //                     name="occasions"
            //                     label="Occasion"
            //                     value={this.state.formControls.occasions.value}
            //                     onChange={this.handleChange}
            //                     options={this.state.formControls.occasions.options}
            //                     touched={this.state.formControls.occasions.touched}
            //                     valid={this.state.formControls.occasions.valid}
            //                 /> 
            //         </Grid>
            //         <Grid item xs className={classes.formItems}>
            //                 <DatePicker 
            //                     id="date"
            //                     label="Occasion Date"
            //                     type="date"
            //                     defaultValue=""
            //                 />
            //         </Grid>
            //         <Grid item xs={6} className={classes.formItems}>
            //                  <TestSelect 
            //                     name="occasions"
            //                     label="Occasion"
            //                     value={this.state.formControls.occasions.value}
            //                     onChange={this.handleChange}
            //                     options={this.state.formControls.occasions.options}
            //                     touched={this.state.formControls.occasions.touched}
            //                     valid={this.state.formControls.occasions.valid}
            //                 /> 
            //         </Grid>
            //           <Grid item xs className={classes.formItems}>
            //                 <DatePicker 
            //                     id="date"
            //                     label="Occasion Date"
            //                     type="date"
            //                     defaultValue=""
            //                 />
            //         </Grid>
            //         <Grid item xs={6} className={classes.formItems}>
            //                  <TestSelect 
            //                     name="occasions"
            //                     label="Occasion"
            //                     value={this.state.formControls.occasions.value}
            //                     onChange={this.handleChange}
            //                     options={this.state.formControls.occasions.options}
            //                     touched={this.state.formControls.occasions.touched}
            //                     valid={this.state.formControls.occasions.valid}
            //                 /> 
            //         </Grid>
            //           <Grid item xs className={classes.formItems}>
            //                 <DatePicker 
            //                     id="date"
            //                     label="Occasion Date"
            //                     type="date"
            //                     defaultValue=""
            //                 />
            //         </Grid>
            //         <Grid item xs={12}>
            //                 <Typography variant="subheading" color="inherit" style={{ marginTop: 20 }}>
            //                     Upload a picture:
            //                     <input name="img" type="file" ref={this.fileInput} style={{ marginTop: 10 }} />
            //                 </Typography> 
            //         </Grid>
            //         <Grid item xs={12}>
            //                 <Button 
            //                     variant="contained" 
            //                     size="small"
            //                     color="primary"
            //                     className={classes.button}
            //                     onClick={this.formSubmitHandler}
            //                 >
            //                 Save
            //                 <SaveIcon className={classNames(classes.rightIcon, classes.iconSmall)} />                        
            //               </Button> 
            //         </Grid>         
            //             {/* </Paper> */}
              
            //     </Grid>
          
              
            // </div>
        )
    }

};

AddFriendContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};
    
export default withStyles(styles)(AddFriendContainer);

























   












