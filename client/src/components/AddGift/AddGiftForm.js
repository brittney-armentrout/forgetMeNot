// import React from "react";
// import { 
//     FormControl,
//     InputLabel,
//     Input,
//     Button,
//     TextField,
//     Select,
//     withStyles
// } from "@material-ui/core";

// const styles = theme => ({
//     root: {
//         display: "flex",
//         flexWrap: "wrap",
//     },
//     formControl: {
//         margin: theme.spacing.unit,
//         minWidth: 200,
//     },
//     selectEmpty: {
//         marginTop: theme.spacing.unit * 2,
//     },
// });

// // componentDidMount() {
// //     this.loadFriends()
// // };

// // loadFriends = () => {
// //     API.getFriends()
// //         .then(res => this.setState({ friends: res.data }))
// //         .catch(err => console.log(err))
// // };

// class AddGift extends React.Component {
//     constructor(props) {
//         super(props);
//     };

//     render() {
//         const { classes } = this.props;
        
//         return (        
//             <form className={classes.root} autoComplete="off">
//                 <h1>Add a Gift</h1>

//                 <FormControl className={classes.formControl}>
//                     <InputLabel htmlFor={props.name}>{props.title}</InputLabel>
//                     <Input 
//                         id = {props.name} 
//                         name = {props.name}
//                         type = {props.type}
//                         value = {props.value}
//                         placeholder = {props.placeholder}
//                         onChange = {props.handleChange}
//                     />
//                 </FormControl>
//                 <FormControl className={classes.formControl}>
//                     <InputLabel htmlFor={props.name}>{props.title}</InputLabel>
//                     <Select 
//                         id = {props.name}
//                         name = {props.name}
//                         type = {props.type}
//                         value = {props.value}
//                         placeholder = {props.placeholder}
//                         onChange = {props.handleChange}
//                     >
//                         <MenuItem value="">
//                             <em>None</em>
//                         </MenuItem>
//                             {this.state.friends.map(friends => {
//                                 return (
//                                     <MenuItem value={friends.name}>{friends.name}</MenuItem>
//                                 )
//                             })}
//                     </Select>                  
//                 </FormControl>
//             </form>
//         )
//     }
// }

// AddGift.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(AddGift);