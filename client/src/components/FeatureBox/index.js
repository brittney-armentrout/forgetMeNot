import React from 'react';
import "./style.css"

export function FeatureBox({ children }) {
    return (
        <div className="flex-box">
            <ul className="collection">{children}</ul>
        </div>
    ); 
}