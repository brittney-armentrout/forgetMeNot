import React, { Component } from "react";
import clsx from 'clsx';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import { Tabs, Tab } from "@material-ui/core";
// import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import GiftGridList from "../components/GiftGrid/GiftGridList";
import FriendOccasionsTable from "../components/OccasionsTable/FriendOccasionsTable";
import FriendsContainer from "../containers/FriendsContainer";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

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
    },
});

class DetailTabs extends Component {
    state = {
        value: 0,
        user: "",
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    componentWillMount = () => {
        console.log(this.props.location.state.user);
        this.setState({ user: this.props.location.state.user });
        
    }

    render() {
        const { classes } = this.props;
        const { value } = this.state;
        console.log(this.state.user);

        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.appBar}>
                    <Link to={{
                        pathname: "/main",
                        state: { user: this.state.user }
                        }}>
                        
                        <Typography component="p">
                            Main
                            <KeyboardBackspaceIcon />
                        </Typography>
                    </Link>
                    <Tabs 
                        variant="fullWidth"
                        value={value} 
                        onChange={this.handleChange}
                        centered
                    >
                        <Tab label="Friends" />
                        <Tab label="Occasions" />
                        <Tab label="Gift Ideas" />  
                    </Tabs>
                </AppBar>
                    {value === 0 && <TabContainer>
                                        <FriendsContainer userID = {this.state.user} />
                                    </TabContainer>}
                    {value === 1 && <TabContainer>
                                        <FriendOccasionsTable userID = {this.state.user}/>
                                    </TabContainer>}
                    {value === 2 && <TabContainer>
                                        <GiftGridList userID = {this.state.user}/>
                                 </TabContainer>}

            
               
            </div>
        );
    }
}

DetailTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailTabs);