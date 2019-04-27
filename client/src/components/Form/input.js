import React from "react";

const Input = (props) => {
    return (
        <div className="row">
            <div className="col s8 push-s2">
                <div className="input-field">
                    <label htmlFor={props.name} className="form-label">{props.title}</label>
                    <input 
                        className = "form-input"
                        id = {props.name}
                        name = {props.name}
                        type = {props.type}
                        value = {props.value}
                        //handleChange callback updates the state and propagates through props.value
                        onChange = {props.handleChange}
                        placeholder = {props.placeholder}
                    />
                </div>
            </div>
        </div>
    )
}

export default Input;