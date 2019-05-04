import React from 'react';
import Grid from "@material-ui/core/Grid";

const TextInput = (props) => {
      let formControl = "form-control";

      if (props.touched && !props.valid) {
          formControl = "form-control control-error";
      }

    return (
        <div className="form-group">
          <Grid item xs={12} md={6}>
              <input type="text" className={formControl} {...props} />
            </Grid>
        </div>
  );
}

export default TextInput;