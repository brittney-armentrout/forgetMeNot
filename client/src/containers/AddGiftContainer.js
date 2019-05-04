import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
// import Button from "../components/Form/button";
import Button from "@material-ui/core/Button";
import Input from "../components/Form/input";
import API from "../utils/API";
import AddGift from "../components/AddGift/AddGiftForm";
// import { Select } from "@material-ui/core";
// import SimpleSelect from "../components/Select/SimpleSelect";
import FriendSelect from "../components/Select/NativeSelect";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { FormControl } from "@material-ui/core";
import TextFields from "../components/Input/GiftInput";
import TestSelect from "../components/FormTest/TestMaterialSelect";
import TextInput from "../components/FormTest/TextInput";
import validate from "../components/FormTest/Validate";

const giftImg = require("../components/Logo/img/GiftLg.png");

// const styles = theme => ({
//     root: {
//         width: "100%",
//         marginTop: theme.spacing.unit * 3,
//         overflowX: "auto",
//         textAlign: "center",
//         alignItems: "center",
//         color: theme.palette.primary.main,
//     },
//     image: {
//         marginTop: theme.spacing.unit,
//         marginLeft: theme.spacing.unit,
//     },
//     select: {
//         marginLeft: theme.spacing.unit * 5,
//     }
// })

class AddGiftContainer extends Component {
    constructor() {
        super();

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
            .then(res => this.setState({ friends: res.data }))
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
        return (
            <div className="addGiftForm">
                <Grid item xs={12} md={6}>
                    <Paper elevation={5}>
                        <TextInput 
                          name="gift"
                          placeholder={this.state.formControls.gift.placeholder}
                          value={this.state.formControls.gift.value}
                          onChange={this.handleChange}
                          touched={this.state.formControls.gift.touched}
                          valid={this.state.formControls.gift.valid}
                        />
                       <TestSelect 
                            name="friend"
                            value={this.state.formControls.friend.value}
                            onChange={this.handleChange}
                            options={this.state.formControls.friend.options}
                            touched={this.state.formControls.friend.touched}
                            valid={this.state.formControls.friend.valid}
                        />
                         <input name="img" type="file" ref={this.fileInput} />
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick={this.formSubmitHandler}
                        >Submit
                        </Button>
                    </Paper>
                </Grid>
            </div>
        )
               
    };
}

export default AddGiftContainer;
    
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

// AddGiftContainer.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(AddGiftContainer);