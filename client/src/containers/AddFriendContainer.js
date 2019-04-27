import React, { Component } from "react";
import API from "../utils/API";
import Button from "../components/Form/button";
import Input from "../components/Form/input";

class AddFriendContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Friend: {
                name: "",
                address: "",
                img: "",
                gifts: [],
                occasions: []
            }
        }
        this.handleFriendSubmit = this.handleFriendSubmit.bind(this);
        this.handleClearForm = this.handleClearForm.bind(this);
        this.handleFriendInput = this.handleFriendInput.bind(this);
    }

    handleFriendSubmit(event) {
        //send new friend data to DB
        event.preventDefault();

        API.saveFriend({
            name: this.state.name,
            address: this.state.address,
            // img: this.state.img,
            date: new Date(Date.now()),
            isFavorite: true,
            //!! need to figure out how to enter and save an array here !!
            // gifts: 
            // occasions:
        })
        .then(console.log("new friend saved to DB"))
        .catch(err => console.log(err));
    }

    // handleSave = (book) => {
    //     // event.preventDefault();
    //     console.log(book.id, book.volumeInfo.title, book.volumeInfo.authors[0]);
    //     ToastsStore.success("Book Saved!");
    
    //         API.saveBook({
    //             title: book.volumeInfo.title,
    //             author: book.volumeInfo.authors[0],
    //             synopsis: book.volumeInfo.description,
    //             date: new Date(Date.now()),
    //             isSaved: true
    //         })
    //             .then(console.log("saved to DB"))
    //             .catch(err => console.log(err));
    // } 

    handleClearForm(event) {
        event.preventDefault();
        this.setState({
            Friend: {
                name: "",
                address: "",
                img: "",
                gifts: [],
                occasions: []
            }
        })
    }
    
    handleFriendInput(event) {
        let value = event.target.value;
        let name = event.target.name;
        this.setState ( prevState => {
            return {
                Friend: {
                    ...prevState.Friend, [name]: value
                }
            }
        });
    }

    render() {
        return (
            <div>
                <form className="container" onSubmit={this.handleFriendSubmit}>
                    {/* Friend Name  */}
                    <Input 
                        inputType = {"text"}
                        title = {"Name"}
                        name = {"name"}
                        value = {this.state.Friend.name}
                        handleChange = {this.handleFriendInput}
                    />
                    {/* Friend Address  */}
                    <Input  
                        inputType = {"text"}
                        title = {"Address"}
                        name = {"address"}
                        value = {this.state.Friend.address}
                        handleChange = {this.handleFriendInput}
                    />
                    {/* Input for adding Image */}
                    {/* Dropdown for Friend Occasions  */}
                    {/* Friend Gift Ideas */}
                    {/* Favorite? Checkbox */}
                    <Button 
                        action = {this.handleFriendSubmit}
                        type = {"primary"}
                        title = {"Submit"}
                    />
                </form>
            </div>   
        )
    }


}

export default AddFriendContainer;
