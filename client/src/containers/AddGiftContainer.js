import React, { Component } from "react";
// import Button from "../components/Form/button";
import Button from "@material-ui/core/Button";
import Input from "../components/Form/input";
import API from "../utils/API";
// import { Select } from "@material-ui/core";
// import SimpleSelect from "../components/Select/SimpleSelect";
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


const giftImg = require("../components/Logo/img/GiftLg.png");
const listFont = "'Roboto', sans-serif";

const styles = theme => ({
    root: {
        width: "100%",
        marginTop: theme.spacing.unit * 3,
        overflowX: "auto",
        color: theme.palette.primary,
        fontFamily: listFont,
       
    },
    image: {
        marginTop: theme.spacing.unit * 2,
        maxHeight: 60,
    },
    select: {
        marginLeft: theme.spacing.unit * 5,
    },
    button: {
        margin: theme.spacing.unit,
        justify: "center",
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
})

class AddGiftContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            formIsValid: false,
            formControls: {
                gift: {
                    value: "",
                    placeholder: "Gift",
                    valid: false,
                    touched: false,
                    validationRules: {
                        minLength: 3,
                        isRequired: true
                    }
                },
                friend: {
                    value: "",
                    placeholder: "Choose Friend",
                    valid: false,
                    touched: false,
                    validationRules: {
                        isRequired: true,
                    },
                    options: [
                        { value: "friend1", displayValue: "Friend1"},
                        { value: "friend2", displayValue: "Friend2"}
                    ]
                },
                file: {
                    value: "",
                    valid: false,
                    touched: false,
                    validationRules: {
                        isRequired: false,
                    }
                },
            }
        }
    }

    componentDidMount() {
        this.loadFriends()
    };

    loadFriends = () => {
        API.getFriends()
            .then(res => this.setState({ options: res.data }))
            .catch(err => console.log(err))
    }

    formSubmitHandler = () => {
        const formData = {};
        for (let formElementId in this.state.formControls) {
            formData[formElementId] = this.state.formControls[formElementId].value;
        }
        console.log(formData);
        console.log(formData.friend);
        console.log(formData.gift);
        console.log(formData.file);
        // API.saveGift({
        //     gift: formData.gift,
        //     friend: formData.friend,
        //     img: formData.img
        // })
        //api saveGift
        //api saveImg
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
        }

        this.setState({
                formControls: updatedControls,
                FormIsValid: formIsValid
        });
    }

    // handleSubmit(event) {
    //     //send new gift data to DB
    //     event.preventDefault();
    //     console.log('Submit button hit!');
    //     alert(
    //         `Selected file - ${
    //             this.fileInput.current.files[0].name
    //         }`
    //     );
    //     API.saveGift({
    //         gift: this.state.Gift.gift,
    //         // address: this.state.Gift.address,
    //         // // img: this.state.img,
    //         // date: new Date(Date.now()),
    //         // isFavorite: true,
    //         //!! need to figure out how to enter and save an array here !!
    //         // gifts: 
    //         // occasions:
    //     })
    //     .then(this.handleFormClear(), console.log("new gift saved to DB"))
    //     .catch(err => console.log(err));
    // }

    // handleFormClear() {
    //     this.setState({
    //         Gift: {
    //             gift: "",
    //             img: "",
    //             isStar: ""
    //         }
    //     })
    // }

    // handleInput(event) {
    //     let value = event.target.value;
    //     let name = event.target.name;
    //     this.setState ( prevState => {
    //         return {
    //             Gift : {
    //                 ...prevState.Gift, [name]: value 
    //             }
    //             // Friends : [
    //             //     ...prevState.Friends, [name]: value
    //             // ]
    //         }
    //       }, () => console.log(this.state.Gift));     
    // }

    // handleInput(event) {
    //     const name = event.target.name;
    //     const value = event.target.value;

    //     this.setState({
    //         formControls: {
    //             [name]: value
    //         }
    //     });
    // }

    render() {
        const { classes } = this.props;

        return (
            <div>
                <Grid 
                    container
                    spacing={0}
                    direction="column"
                    justify="center"
                    alignItems="center"
                    style={{ minHeight: 500 }}
                >
                    <Grid item xs={3}>  
                        <Paper style={{ paddingLeft: 25, paddingBottom: 25 }}>    
                            <Typography variant="h3" color="primary" style={{ marginBottom: 30, fontSize: 55 }}>
                                <img className={classes.image} src={giftImg} alt="Gift Logo"></img>
                                Add a Gift   
                            </Typography>
                        
                            <TextInput 
                                label={this.state.formControls.gift.placeholder}
                                type="text"
                                name="gift"
                                value={this.state.formControls.gift.value}
                                onChange={this.handleChange}
                                touched={this.state.formControls.gift.touched}
                                valid={this.state.formControls.gift.valid}
                            />            
                            <br />
                            <TestSelect 
                                name="friend"
                                value={this.state.formControls.friend.value}
                                onChange={this.handleChange}
                                options={this.state.formControls.friend.options}
                                touched={this.state.formControls.friend.touched}
                                valid={this.state.formControls.friend.valid}
                            />                    
                            <br />
                            <Typography variant="subheading" color="inherit" style={{ marginTop: 20 }}>
                                Upload a picture:
                                <input name="img" type="file" ref={this.fileInput} style={{ marginTop: 10 }} />
                            </Typography>
                            <br />
                            <Button 
                                variant="contained" 
                                size="small"
                                color="primary"
                                className={classes.button}
                                onClick={this.formSubmitHandler}
                            >
                            Save
                            <SaveIcon className={classNames(classes.rightIcon, classes.iconSmall)} />                        
                          </Button>
                        </Paper> 
                     </Grid>
                </Grid>  
            </div>
        )              
    };
}

AddGiftContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddGiftContainer);

// export default AddGiftContainer;
    
            // <Grid 
            //     container
            //     spacing={24}
            //     direction="row"
            //     justify="center"
            //     alignItems="center"
            // >
            // <Grid item xs={12} md={6}>
            //     <Paper className={classes.root} style={{ minHeight: 400 }}>
            //         <h1>New Gift
            //             <img src={giftImg} className={classes.image} alt="Gift" style={{ height: 100 }} />
            //         </h1>
            //         <form onSubmit={this.handleSubmit}>
            //             {/* Gift Input */}
            //             <Input 
            //                 value = {this.state.Gift.gift}
            //                 name = {"gift"}
            //                 type = {"text"}
            //                 placeholder = {"Gift"}
            //                 onChange = {this.handleInput}
            //             />
            //             {/* Select Friend */}
            //             <label>
            //                 Which friend should this gift go to?
            //             <select value = {this.state.value} onChange={this.handleInput}>
            //                 {this.state.friends.map(friend => {
            //                     return (
            //                         <option value={friend.name}>{friend.name}</option>
            //                     )
            //                 })}
            //             </select>
            //             </label>
                       
                        /* Submit */
                        // <Button 
                        //     action = {this.handleSubmit}  
                        //     type = {"primary"}
                        //     title = {"Submit"} 
                        // />     
            //         </form> 
            //     </Paper>
            // </Grid>
            // </Grid>
        // );
    // }

// }

