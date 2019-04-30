import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Tabs, Tab } from "@material-ui/core";
// import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import GiftGridList from "./GiftGridList";
import OccasionsTable from "./OccasionsTable";
import FriendGrid from "./FriendGrid";

// import PhoneIcon from "@material-ui/core/Phone";
// import FavoriteIcon from "@material-ui/core/Favorite";
// import PersonPinIcon from "@material-ui/core/PersonPin";


// !!!  NEED TO CONVERT FRIEND DETAIL FROM GRID OF FRIENDS TO ONE FRIEND & THEIR INFO !!!
const displayFont = "'Fresca', sans-serif";

const TabContainer = (props) => {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        fontFamily: displayFont,
    },
    appBar: {
        backgroundColor: theme.palette.primary
    }
});

class SimpleTabs extends Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Tabs 
                        fullWidth={true}
                        value={value} 
                        onChange={this.handleChange}
                        centered
                    >
                        <Tab label="Friend Detail" />
                        <Tab label="Occasions" />
                        <Tab label="Gift Ideas" />               
                    </Tabs>
                </AppBar>
                    {value === 0 && <TabContainer>
                                        <FriendGrid />
                                    </TabContainer>}
                    {value === 1 && <TabContainer>
                                        <OccasionsTable />
                                    </TabContainer>}
                    {value === 2 && <TabContainer>
                                        <GiftGridList />
                                 </TabContainer>}

            
               
            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);