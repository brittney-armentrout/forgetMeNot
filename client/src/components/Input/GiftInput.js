// import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import { withStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';

// const styles = theme => ({
//   container: {
//     display: 'flex',
//     flexWrap: 'wrap',
//   },
//   textField: {
//     marginLeft: theme.spacing.unit,
//     marginRight: theme.spacing.unit,
//     width: 200,
//   },
//   dense: {
//     marginTop: 19,
//   },
//   menu: {
//     width: 200,
//   },
// });

// class TextFields extends React.Component {
//   state = {
//     name: "",
//   };

//   handleChange = name => event => {
//     this.setState({ [name]: event.target.value });
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//       <form className={classes.container} autoComplete="off">
//         <TextField
//           id="standard-name"
//           label="Gift"
//           className={classes.textField}
//           value={this.state.name}
//           onChange={this.handleChange('name')}
//           margin="normal"
//         />
//     </form>
//     );
//   };
// }

// TextFields.propTypes = {
//     classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(TextFields);