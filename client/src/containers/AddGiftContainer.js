import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import API from "../utils/API";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InputLabel from '@material-ui/core/InputLabel';
import validate from "../components/FormTest/Validate";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import SaveIcon from '@material-ui/icons/Save';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";

const giftImg = require("../components/Logo/img/GiftLg.png");
const listFont = "'Roboto', sans-serif";

const styles = theme => ({
    layout: {
        width: "auto",
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [
            theme
                .breakpoints
                .up(600 + theme.spacing.unit * 2 * 2)
        ]: {
            width: 600,
            marginLeft: "auto",
            marginRight: "auto"
        },
        color: theme.palette.primary,
        fontFamily: listFont
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)] : {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3
        },
    },
    image: {
        marginTop: theme.spacing.unit * 2,
        maxHeight: 60
    },
    select: {
        marginLeft: theme.spacing.unit * 5
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit,
        justify: "center"
    },
    rightIcon: {
        marginLeft: theme.spacing.unit
    },
    iconSmall: {
        fontSize: 20
    }
})

class AddGiftContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formIsValid: false,
            formControls: {
                gift: {
                    value: "",
                    // key: "",
                    placeholder: "Gift",
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true
                    }
                },
                friends: [],
                friendSelect: {
                        value: "",
                        id: "",
                        placeholder: "Select a friend",
                        valid: false,
                        touched: false,
                    },
                file: {
                    value: "",
                    valid: false,
                    touched: false,
                    validationRules: {
                        isRequired: false
                    }
                }
            }
        }
    }

    componentDidMount() {
        this.loadFriends();
    };

    loadFriends = () => {
        const userID = this.props.userID;
        console.log(userID)
        API.getFriends(userID)
            .then(res => this.setState({
                formControls: {
                    ...this.state.formControls,
                    friends: res.data.friends,
                },
            }))       
            .catch(err => console.log(err))
    }

    formSubmitHandler = () => {
        const formData = {};
        for (let formElementId in this.state.formControls) {
            formData[formElementId] = this.state.formControls[formElementId].value;
            console.log(formElementId)
        }
        console.log(formData);
        
        
        const userID = this.props.userID;
        API.saveGift(userID, formData)
            .then((response) => {
                console.log(`New gift added! ${response}`)
            })
            // .then(this.handleFormClear())
    };

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        const id = event.target.id;

        const updatedControls = {
            ...this.state.formControls
        };
        const updatedFormElement = {
            ...updatedControls[name]
        };
        updatedFormElement.value = value;
        updatedFormElement.id = id;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

        updatedControls[name] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
            formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }

        this.setState({
            formControls: updatedControls, 
            FormIsValid: formIsValid
        });
    }

    handleSelectChange = value => {
        this.setState({ selectedValue: value })
    };

    // handleFormClear() {     
    //         this.setState({         
    //             formIsValid: false,
    //             formControls: {
    //                 gift: {
    //                     value: "",
    //                     // key: "",
    //                     placeholder: "Gift",
    //                     valid: false,
    //                     touched: false,
    //                 },
    //                 friendSelect: {
    //                         value: "",
    //                         id: "", 
    //                         valid: false,
    //                         touched: false, 
    //                     },
    //                 file: {
    //                     value: "",
    //                     valid: false,
    //                     touched: false,                     
    //                 }
    //             }
    //       }) 
    // } 

    //  handleSubmit(event) {     
    //     //send new gift data to DB
    //     event.preventDefault();     
    //     console.log('Submit button hit!');     
    //     alert(
    //         `Selected file - ${this.fileInput.current.files[0].name}`     
    //     );     
    //      API.saveGift({         
    //         gift: this.state.Gift.gift,
    //         //  address: this.state.Gift.address,         
    //         // img: this.state.img,
    //         // need to figure out how to enter and save an array here !!         
    //         // gifts:
    //        // occasions:     
    //     })     
    //         .then(this.handleFormClear(), console.log("new gift saved to DB"))     
    //         .catch(err => console.log(err)); 
    //     } 
        
        
        
        // handleInput(event) {     
        //     let value = event.target.value;     
        //     let name = event.target.name;
        //      this.setState ( 
        //          prevState => {         
        //              return {             
        //                  Gift : {
        //                     ...prevState.Gift, 
        //                     [name]: value             
        //                 }             
        //                 Friends: [                 
        //                     ...prevState.Friends, 
        //                     [name]: value            
        //                 ]
        //             }       
        //         }, () => console.log(this.state.Gift)); 
        //     } 
        
        // handleInput(event) {
        //     const name = event.target.name;     
        //     const value = event.target.value;
        //      this.setState({         
        //          formControls: {             
        //              [name]: value         
        //         }
        //     }); 
        // }

    render() {
        const { classes } = this.props;

        return (
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h3" color="primary" style={{ marginBottom: 30, fontSize: 55 }}>
                        <img className={classes.image} src={giftImg} alt="Gift Logo"></img>
                        Add New Gift
                    </Typography>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                label={this.state.formControls.gift.placeholder}
                                type="text"
                                name="gift"
                                fullWidth
                                value={this.state.formControls.gift.value}
                                onChange={this.handleChange}
                                touched={this.state.formControls.gift.touched}
                                valid={this.state.formControls.gift.valid}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <InputLabel htmlFor="friendSelect">Select Friend</InputLabel>
                            <Select
                                name="friendSelect"
                                id={this.state.id}
                                value={this.state.selectedValue}
                                displayValue={this.state.selectedValue}
                                onChange={this.handleSelectChange}
                                onChange={this.handleChange}
                                // inputProps={{
                                //     name: "friend",
                                //     id: this.state.friend.id,
                                // }}
                                fullWidth                
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {this.state.formControls.friends.map(friend => {
                                    return (
                                        <MenuItem   
                                            value={friend.name} 
                                            id={friend.id}
                                            // displayValue={friend.name} 
                                            displayValue={this.state.selectedValue}
                                            onChange={this.handleSelectChange}
                                            onChange={this.handleChange}  
                                        >
                                        {friend.name}
                                        </MenuItem>  
                                    )
                                })}
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            {/* <input  
                                accept="image/*"
                                className={classes.input}
                                id="imgFileBtn"
                                multiple
                                type="file"
                            /> */}
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
                                size="small"
                                color="primary"
                                className={classes.button}
                                onClick={this.formSubmitHandler}>
                                Save
                                <SaveIcon className={classNames(classes.rightIcon, classes.iconSmall)}/>
                            </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </main>
        )
    };
}

AddGiftContainer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddGiftContainer);

