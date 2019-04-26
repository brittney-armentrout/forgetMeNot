import React from "react";
import "./style.css";

export function List({ children }) {
    return (
        <div className="container">
            <ul className="collection">{children}</ul>
        </div>
      );
}

