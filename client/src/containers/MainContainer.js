// import React, { Component } from "react";
// import API from "../utils/API";
// import { FeatureBox } from "../components/FeatureBox";
// // import { Thumbnail } from "../components/Thumbnail";
// import { ListItem } from "../components/List";

// //Matt & Brit - npm install @material-ui/core INSIDE client 

// class MainContainer extends Component {
//     constructor(props) {
//     super(props);
//         this.state = {
//                 friends: [{
//                     name: "",  
//                     address: "",
//                     img: "",
//                     gifts: [],
//                     occasions: [{
//                         type: "",
//                         date: ""
//                     }]
//                 }],
            
//             }
        
//         }

//     componentDidMount() {
//         this.loadFriends()
//     }

//     //not sure if this is functional or not
//     //will need to change to Favorites once we get that functionality going, for now just load friends
//     loadFriends = () => {
//         API.getFriends()
//             .then(res => this.setState({ friends: res.data }))
//             .catch(err => console.log(err))
//     }

//     handleFriendClick = () => {
//         //when someone clicks on a fav picture, should go to friend detail page
//     }

//     handleUpcomingClick = () => {
//         //when someone clicks on an occasion, should go to friend detail page 
//     }

//     render() {
//         return (
//             <div className="flex-container" id="favoritesFlex">
//                     <h2>Friends</h2>
//                         {this.state.friends.length ? (
//                             <FeatureBox>
//                                 {this.state.friends.map(friend => {
//                                     return (
//                                         // <Thumbnail key={friend._id} />
//                                         <ListItem key={friend._id}>
//                                         <span className="name">{friend.name}</span>
//                                         {/* <img className="img">{friend.img}</img> */}
//                                         </ListItem>
//                                     );
//                                 })}
//                             </FeatureBox>
//                         ) : (
//                             <h3>No Friends Yet!</h3> 
//                         )}
                    
//                     {/* <h2>Upcoming Occasions</h2>
//                          {this.state.friends[0].occasions.length ? (
//                             <FeatureBox>
//                                 {this.state.friends[0].occasions.map(occasion => (
//                                   <ListItem key={occasion._id}>
//                                     <span className="occasion">{occasion.type}</span>
//                                   </ListItem>
//                                 ))}
//                             </FeatureBox>
//                         ) : (
//                             <h3>No Upcoming Occasions Yet!</h3>
//                         )}  */}
//             </div>
//         )
//     }
// }


// export default MainContainer;



