// import React from 'react';
// import PropTypes from 'prop-types';
// import ReactDOM from 'react-dom';
// import { withStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import FilledInput from '@material-ui/core/FilledInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';
// import API from "../../utils/API";


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

// class FriendSelect extends React.Component {
//     state = {
//         friends: [],
//         // friend: "",
//         // labelWidth: 0,
//     };

//     componentDidMount() {
//         // this.setState({});
//         this.loadFriends()
//     }

//     loadFriends = () => {
//         API.getFriends()
//             .then(res => this.setState({ friends: res.data }))
//             .catch(err => console.log(err))
//     }
    
//     handleChange = name => event => {
//         this.setState({ [name]: event.target.value});
//     };

//     render() {
//         const { classes } = this.props;

//         return (
//             <div className={classes.root}>
//                 <FormControl className={classes.formControl}>
//                     <InputLabel htmlFor={this.state.name}>Choose Friend</InputLabel>
//                     <Select
//                         native
//                         value={this.state.friend}
//                         onChange={this.handleChange("friend")}
//                         inputProps={{
//                             name: "friend",
//                             id: "friend-id",
//                         }}
//                     >
//                         <option value="" />
//                         {this.state.friends.map(friend => {
//                             return (
//                                 <option value={friend.name}>{friend.name}</option>
//                             )
//                         })}
//                     </Select>
//                 </FormControl>
//             </div>
//         );
//     }
// }

// FriendSelect.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(FriendSelect);