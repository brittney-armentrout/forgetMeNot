import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
// import Icon from '@material-ui/core/Icon';
// import DeleteIcon from '@material-ui/icons/Delete';
// import NavigationIcon from '@material-ui/icons/Navigation';


const styles = theme => ({
    fab: {
        margin: theme.spacing.unit,
       
        //href: add link to add gift !!modal!! here
        
    },
});



function FAB(props) {
    const { classes } = props;
    return (
        <div>
            <Fab color="secondary" aria-label="Add" className={classes.fab}>
                <AddIcon />
            </Fab>
        </div>
    ) 
}

FAB.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(FAB);