import React from "react";
import "./style.css"

const testImg = require("./sampleImg.jpg");

const Thumbnail = (props) => {
    return (
        <div className="img">
            <img 
                className="friendImg" 
                alt="Friend" 
                src={testImg} />
        </div>
    )
}

export default Thumbnail;