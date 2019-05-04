// import React from 'react';
// import ReactDOM from 'react-dom';
// import API from "../../utils/API";
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import FilledInput from '@material-ui/core/FilledInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';

// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';



// const styles = theme => ({
//     root: {
//       display: 'flex',
//       flexWrap: 'wrap',
//     },
//     formControl: {
//       margin: theme.spacing.unit,
//       minWidth: 120,
//     },
//     selectEmpty: {
//       marginTop: theme.spacing.unit * 2,
//     },
//   });

//   class SimpleSelect extends React.Component {
//     state = { 
//         friends: [],
//         friend: "",
//         // name: 'hai',
//         labelWidth: 0,
//     };
  
//     componentDidMount() {
//         // this.setState({
//         //     labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
//         // });
//         this.loadFriends()
//       }

//     loadFriends = () => {
//         API.getFriends()
//             .then(res => this.setState({ friends: res.data }))
//             .catch(err => console.log(err))
//     }

//       handleChange = event => {
//         this.setState({ [event.target.name]: event.target.value });
//       };

//       render() {
//           const { classes } = this.props;

//           return (
//               <form className={classes.root} autoComplete="off">
//                 <FormControl className={classes.formControl}>
//                 <InputLabel htmlFor={this.state.name}>Friend</InputLabel>
//                 <Select 
//                     value = {this.state.friend}
//                     onChange = {this.handleChange}
//                     inputProps={<Input name="friend" id="friend-id" />}
//                 >
//                     <MenuItem value="">
//                         <em>None</em>
//                     </MenuItem>
//                         {this.state.friends.map(friends => {
//                             return (
//                                 <MenuItem value={friends.name}>{friends.name}</MenuItem>
//                             )
//                         })}
//                 </Select>
//                 </FormControl>
//               </form>
//           )
//       }

//   };

// SimpleSelect.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(SimpleSelect);