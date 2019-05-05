import React from 'react';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import FormControl from '@material-ui/core/FormControl';


// const TextInput = (props) => {
//       let formControl = "form-control";

//       if (props.touched && !props.valid) {
//           formControl = "form-control control-error";
//       }

//     return (
//         <div className="form-group">
//               <input type="text" className={formControl} {...props} />
//         </div>
//   );
// }

// export default TextInput;

const TextInput = (props) => {
  let formControl = "form-control";

  if (props.touched && !props.valid) {
    formControl = "form-control control-error";
  }

  return (
    <Grid item xs={12} md={6}>
        <FormControl style={{ minWidth: 290 }}>
          <TextField 
            // id={props.id}
            label={props.label}
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          />
      </FormControl>
    </Grid>
  )
}

export default TextInput;