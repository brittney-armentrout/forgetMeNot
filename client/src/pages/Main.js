import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Tabs, Tab } from "@material-ui/core";
// import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
// import GiftGridList from "../components/GiftGrid/GiftGridList";
import MainOccasionsTable from "../components/OccasionsTable/MainOccasionsTable";
import FriendGrid from "../components/FriendGrid/FriendGrid";
import AddFriendContainer from "../containers/AddFriendContainer";
import AddGiftContainer from "../containers/AddGiftContainer";
import { Link } from "react-router-dom";

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
        backgroundColor: theme.palette.primary,
    },
});

class MainTabs extends Component {
        state = {
            value: 0,
            user: "",
        };
    

    handleChange = (event, value) => {
        this.setState({ value });
    };

    componentDidMount = () => {
        this.setState({ user: this.props.location.state.user });
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
                        <Tab label="Main" />
                        <Tab label="Add Gift" />
                        <Tab label="Add Friend" />               
                    </Tabs>
                </AppBar>
                    {value === 0 && <TabContainer> 
                                        <Typography 
                                            component="title" 
                                            variant="h4"
                                            style={{ marginLeft: 120 }}
                                        >
                                        Your Favorites
                                        </Typography>
                                            <Link to={{
                                                pathname: "/detail",
                                                state: { user: this.state.user }
                                            }}>
                                                <FriendGrid />
                                            </Link>
                                        <Typography 
                                            component="title" 
                                            variant="h4"
                                            style={{ marginLeft: 120, marginTop: 20, marginBottom: 0 }}
                                            >
                                            Upcoming Occasions</Typography>
                                        <MainOccasionsTable />        
                                    </TabContainer>}
                    {value === 1 && <TabContainer>
                                        <AddGiftContainer userID = {this.state.user}/>
                                    </TabContainer>}
                    {value === 2 && <TabContainer>
                                        <AddFriendContainer userID = {this.state.user}/>
                                 </TabContainer>}

            </div>
        );
    }
}


MainTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainTabs);