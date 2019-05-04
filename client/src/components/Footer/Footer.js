import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonAdd from '@material-ui/icons/PersonAdd';
import FAB from "../FAB/FAB.js";
// import Toolbar from '@material-ui/core/Toolbar';

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.secondary.main,
    },
    flex: {
        flex: 1,
    }

});

class Footer extends React.Component {
    state = {
        // value: 'recents',
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
            <BottomNavigation position="static" value={value} onChange={this.handleChange}>
                
                <BottomNavigationAction label="AddFriend" value="addfriend" icon={<PersonAdd />} />
                <FAB />
                <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
           
            </BottomNavigation>
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);