import React from "react";

//title = text for the button
//action = callback function
//style = style objects can be passed as props

const Button = (props) => {
    console.log(props.style);
    return (
        <button 
            style = {props.style}
            onClick = {props.action}>
            {props.title}
        </button>
    )
}

export default Button;