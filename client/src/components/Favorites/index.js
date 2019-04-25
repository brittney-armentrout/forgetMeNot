//Favorite Friend List 

//Populate with pictures of favorites/friends
//FAB to add new friend
//pictures link to each friend's page

import React from 'react';
import "./style.css"
//import image files 



export function FavBox({ children }) {
    return (
        <div className="flex-box">
            <ul className="collection">{children}</ul>
        </div>
    ); 
}

//will likely need to change this to accommodate picture list
export function FavFriend({ children }) {
    return (
        <div className="row">
            <li className="list-group-item">{children}</li>
        </div>
    )
    
}