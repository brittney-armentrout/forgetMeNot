import React, { Component } from "react";
import Button from "../components/Form/button";
import Input from "../components/Form/input";
import API from "../utils/API";


class GiftAddContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Gift: {
                gift: "",
                img: "",
                isStar: ""
            },
            Friends : []
        }
        this.handleGiftSubmit = this.handleGiftSubmit.bind(this);
        this.handleClearGift = this.handleClearGift.bind(this);
        this.handleGiftInput = this.handleGiftInput.bind(this);
    }

    handleGiftSubmit(event) {
        //send new gift data to DB
        event.preventDefault();
        console.log('Submit button hit!');
        API.saveGift({
            gift: this.state.Gift.gift,
            // address: this.state.Gift.address,
            // // img: this.state.img,
            // date: new Date(Date.now()),
            // isFavorite: true,
            //!! need to figure out how to enter and save an array here !!
            // gifts: 
            // occasions:
        })
        .then(this.handleClearGift(), console.log("new gift saved to DB"))
        .catch(err => console.log(err));
    }

    handleClearGift() {
        this.setState({
            Gift: {
                gift: "",
                img: "",
                isStar: ""
            }
        })
    }

    handleGiftInput(event) {
        let value = event.target.value;
        let name = event.target.name;
        this.setState ( prevState => {
            return {
                Gift : {
                    ...prevState.Gift, [name]: value 
                }
            }
          }, () => console.log(this.state.Gift));     
    }

    render() {
        return (
            <form className="container" onSubmit={this.handleGiftSubmit}>
                {/* Gift Input */}
                <Input 
                    inputType = {"text"}
                    placeholder = {"Gift"}
                    name = {"gift"}
                    value = {this.state.Gift.gift}
                    handleChange = {this.handleGiftInput}
                />
                {/* Select Friend */}  
                {/* Submit */}
                <Button 
                    action = {this.handleGiftSubmit}  
                    type = {"primary"}
                    title = {"Submit"} 
                />     
            </form>
        );
    }

}

export default GiftAddContainer;