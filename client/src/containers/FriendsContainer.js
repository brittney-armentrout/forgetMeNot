import React, { Component } from 'react';
import API from "../utils/API";
import PropTypes from 'prop-types';
import classNames from "classnames";
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const listFont = "'Roboto', sans-serif";

const styles = theme => ({
  layout: {
    width: "auto",
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
        width: 600,
        marginLeft: "auto",
        marginRight: "auto"
    },
    color: theme.palette.primary,
        fontFamily: listFont
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
});

class FriendsContainer extends Component {
    constructor(props) {
        console.log(props);
        super(props);
        console.log(props);
        this.state = {
            friends: [],
        }
    }
   

    componentWillMount() {
        console.log(this.props);
        this.loadFriends();
    };

    loadFriends = () => {
        const userID = this.props.userID;
        API.getFriends(userID)
            .then(res => {
                console.log(res.data.friends);
                this.setState({ friends: res.data.friends })
            })
            .then(API.getGifts)
            .catch(err => console.log(err))
    }

    render() {
        const { classes } = this.props;

        return (
            <main className={classes.layout}>
                {this.state.friends.length ? (
                     <div>
                    {this.state.friends.map(friend => {
                        return (
                            <ExpansionPanel>
                                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                                    <Typography className={classes.heading}>{friend.name}</Typography>
                                 </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Typography>
                                        {friend.gifts[0].gift}
                                    </Typography>
                                </ExpansionPanelDetails>    
                            </ExpansionPanel>
                        )
                    })} 
                    </div>
                ) : (
                    <h3>No Friends Yet.  That's sad.</h3>
                )}
               
            </main>

        )
    }

}

FriendsContainer.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(FriendsContainer);

// function SimpleExpansionPanel(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <ExpansionPanel>
//         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography className={classes.heading}>Expansion Panel 1</Typography>
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//       <ExpansionPanel>
//         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography className={classes.heading}>Expansion Panel 2</Typography>
//         </ExpansionPanelSummary>
//         <ExpansionPanelDetails>
//           <Typography>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
//             sit amet blandit leo lobortis eget.
//           </Typography>
//         </ExpansionPanelDetails>
//       </ExpansionPanel>
//       <ExpansionPanel disabled>
//         <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
//           <Typography className={classes.heading}>Disabled Expansion Panel</Typography>
//         </ExpansionPanelSummary>
//       </ExpansionPanel>
//     </div>
//   );
// }

