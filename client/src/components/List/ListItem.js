import React from "react";
import "./style.css";

export function ListItem({ children }) {
  return (
    <div className="row">
        <li className="collection-item">{children}</li>
    </div>
  ) 
}
