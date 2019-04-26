import React, { Component } from "react";
import Button from "../components/Form/button";
import Input from "../components/Form/input";


class GiftAddContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Gift: {
                gift: "",
                img: "",
                isStar: ""
            }
        }
        this.handleGiftSubmit = this.handleGiftSubmit.bind(this);
        this.handleClearGift = this.handleClearGift.bind(this);
        this.handleGiftInput = this.handleGiftInput.bind(this);
    }

    handleGiftSubmit(event) {
        //event.preventDefault();
    }

    handleClearGift(event) {
        event.preventDefault();
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
                    title = {"Gift"}
                    name = {"gift"}
                    value = {this.state.Gift.gift}
                    handleChange = {this.handleGiftInput}
                />
                {/* Select Friend */}  
                <Input 
                    inputType = {"text"}
                    title = {"Password"}
                    name = {"password"}
                    value = {this.state.User.password}
                    handleChange = {this.handleLoginInput}
                />  
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