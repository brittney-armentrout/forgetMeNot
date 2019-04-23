//Upcoming Occasions

//List of upcoming occasions with:
    //Friend
    //Occasion
        //friend and occasion link back to friend's detail page
    //Date
    //Checkbox for buying a gift 
        //if gift is bought, does it remove it from the list?
//FAB to add upcoming occasions//Favorite Friend List 

import React from 'react';
import "./style.css"


export function UpcomingBox({ children }) {
    return (
        <div className="flex-box">
            <ul className="list-group">{children}</ul>
        </div>
    ); 
}


export function UpcomingItem({ children }) {
    return <li className="list-group-item">{children}</li>
}