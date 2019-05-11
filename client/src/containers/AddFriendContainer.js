import React, { Component } from "react";
import Button from "@material-ui/core/Button";
// import Input from "../components/Form/input";
import API from "../utils/API";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import TestSelect from "../components/FormTest/TestMaterialSelect";
// import TextInput from "../components/FormTest/TextInput";
import validate from "../components/FormTest/Validate";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import { InputLabel } from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import DatePicker from "../components/FormTest/Pickers";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

// const listFont = "'Roboto', sans-serif";

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
    input: {
        display: "none",
    },
});

class AddFriendContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formIsValid: false,
            formControls: {
                friend: {
                    name: { value: "" },
                        // valid: false,
                        // touched: false,
                        // validationRules: {
                        //     isRequired: true,
                        // },
                   
                    // address: {
                    //     value: "",
                    //     valid: false,
                    //     touched: false,
                    //     validationRules: {
                    //         isRequired: false,
                    //     },
                    // },
                    occasions: 
                        { value: "", date: "" },
                            placeholder: "Add an Occasion",
                            valid: false,
                            touched: false,
                            // validationRules: {
                            //     isRequired: false,
                            // },
                            // options: [
                            //     { value: "Birthday", displayValue: "Birthday" },
                            //     { value: "Anniversary", displayValue: "Anniversary" },
                            //     { value: "Graduation", displayValue: "Graduation" },
                            //     { value: "Holiday", displayValue: "Holiday" },
                            //     { value: "Other", displayValue: "Other" },
                            // ]
                        
                    // dates: {
                    //     value: "",
                    //     selectedDate: "",
                    // },
                    img: { value: "", ref: "" },
                        // valid: false,
                        // touched: false,
                        // validationRules: {
                        //     isRequired: false,
                        // },
                    
                    //consider adding Gifts as well
                 },
            },
        };
    };

    formSubmitHandler = () => {
        const formData = {};
        for (let formElementId in this.state.formControls) {
            formData[formElementId] = this.state.formControls[formElementId].value;
        }  
        console.log(formData);
        const userID = this.props.userID;
        API.saveFriend(userID, formData)
        .then((response) => {
            console.log(`New Friend added! ${response}`)
        })
    };


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
    };

    handleSelectChange = value => {
        this.setState({ selectedValue: value })
    };

    handleDateChange = date => {
        this.setState({ selectedDate: date })
    };

    render() {
        const { classes } = this.props;
        
        return (
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h5" color="primary" align="center">
                        Add New Friend
                    </Typography> 
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                required
                                id="name"
                                name="name"
                                label="Friend Name"
                                fullWidth
                                onChange={this.handleChange}
                                value={this.state.formControls.value}
                                touched={this.state.formControls.touched}
                                valid={this.state.formControls.valid}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                id="address"
                                name="address"
                                label="Friend Address"
                                fullWidth
                                onChange={this.handleChange}
                                // value={this.state.formControls.friend.address.value}
                                // touched={this.state.formControls.friend.address.touched}
                                // valid={this.state.formControls.friend.address.valid}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel htmlFor="occasion">Occasion</InputLabel>
                            <Select
                                value={this.selectedValue}
                                onChange={this.handleChange}
                                onChange={this.handleSelectChange}
                                inputProps={{
                                    name: "occasion",
                                    id: "occasion",
                                }}
                                fullWidth
                                // touched={this.state.formControls.occasions.touched}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="birthday">Birthday</MenuItem>
                                <MenuItem value="anniversary">Anniversary</MenuItem>
                                <MenuItem value="holiday">Holiday</MenuItem>
                            </Select>
                         
                                {/* // fullWidth
                                // onChange={this.handleSelectChange}
                                // value={this.state.selectedValue}
                                // onChange={this.handleChange}
                                // options={ value: "Birthday", displayValue: "Birthday" },
                                // touched={this.state.formControls.occasions.touched}
                             */}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <DatePicker 
                                id="date"
                                name="date"
                                label="Occasion Date"
                                type="date"
                                defaultValue=""
                                value={this.state.selectedDate}
                                onChange={this.handleDateChange}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <input  
                                accept="image/*"
                                className={classes.input}
                                id="imgFileBtn"
                                multiple
                                type="file"
                            />
                            <label htmlFor="imgFileBtn">
                                <Button component="span" className={classes.button}>
                                    Upload image
                                </Button>
                            </label>
                            {/* <Typography variant="subheading" color="inherit" style={{ marginTop: 20 }}>
                                Upload a picture:
                                <input name="img" type="file" ref={this.state.formControls.friend.img.fileInput} style={{ marginTop: 10 }} />
                            </Typography>  */}
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

        );
    };

};

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


AddFriendContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};
    
export default withStyles(styles)(AddFriendContainer);

























   












