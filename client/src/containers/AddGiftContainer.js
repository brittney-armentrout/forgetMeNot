import React, {Component} from "react";
import Button from "@material-ui/core/Button";
import API from "../utils/API";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import InputLabel from '@material-ui/core/InputLabel';
import validate from "../components/FormTest/Validate";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import classNames from "classnames";
import Typography from "@material-ui/core/Typography";
import SaveIcon from '@material-ui/icons/Save';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import CustomizedSnackbars from "../components/Snackbar/snackbar";

const giftImg = require("../components/Logo/img/GiftLg.png");
const listFont = "'Roboto', sans-serif";

const styles = theme => ({
    layout: {
        width: "auto",
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 2,
        marginRight: theme.spacing.unit * 2,
        [
            theme
                .breakpoints
                .up(600 + theme.spacing.unit * 2 * 2)
        ]: {
            width: 600,
            marginLeft: "auto",
            marginRight: "auto"
        },
        color: theme.palette.primary,
        fontFamily: listFont
    },
    paper: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 3,
        padding: theme.spacing.unit * 2,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)] : {
            marginTop: theme.spacing.unit * 6,
            marginBottom: theme.spacing.unit * 6,
            padding: theme.spacing.unit * 3
        },
    },
    image: {
        marginTop: theme.spacing.unit * 2,
        maxHeight: 60
    },
    select: {
        marginTop: theme.spacing.unit * 2,
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginLeft: theme.spacing.unit * 2,
    },
    input: {
        display: "none",
    },
    rightIcon: {
        marginLeft: theme.spacing.unit
    },
    iconSmall: {
        fontSize: 20
    }
})

class AddGiftContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            gift: "",
            friends: [],
            friendSelect: "",
            giftImg: "",
            giftAdded: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount() {
        this.loadFriends();
    };

    loadFriends = () => {
        const userID = this.props.userID;
        console.log(userID)
        API.getFriends(userID)
            .then(res => this.setState({ friends: res.data.friends }))    
            .catch(err => console.log(err))
    }

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleClear = event => {
        this.setState({
            gift: "",
            // friends: [],
            friendSelect: "",
            giftImg: "",
            giftAdded: false
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.setState( {friendAdded: false} );
        const formData = {};
        for (let formElementId in this.state) {
            formData[formElementId] = this.state[formElementId];
        }
        console.log(formData);

        const userID = this.props.userID;
        API.saveGift(formData)
            .then((response) => {
                this.setState( {giftAdded: true} );
                this.handleClear();
            })
    }


    render() {
        const { classes } = this.props;

        return (
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h3" color="primary" style={{ marginBottom: 30, fontSize: 55, textAlign: "center" }}>
                        <img className={classes.image} src={giftImg} alt="Gift Logo"></img>
                        Add New Gift
                    </Typography>
                    <form onSubmit={this.handleFormSubmit}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                // type="text"
                                id="gift"
                                name="gift"
                                label="Gift"
                                fullWidth
                                value={this.state.gift}
                                onChange={this.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <InputLabel htmlFor="friendSelect" className={classes.select}>Select Friend</InputLabel>
                            <Select 
                                native
                                name="friendSelect"
                                value={this.state.friendSelect}
                                displayValue={this.state.friendSelect}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: "friendSelect",
                                    id: "friendSelect"
                                }}
                                fullWidth                
                            >
                                <option value="" />
                                {this.state.friends.map(friend => {
                                    return (
                                        <option   
                                            value={friend._id}
                                            displayValue={this.state.value}
                                            onChange={this.handleChange}
                                        >
                                        {friend.name}
                                        </option>  
                                    )
                                })}
                                </Select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <input 
                                    accept="image/*"
                                    className={classes.input}
                                    id="imgFileBtn"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="imgFileBtn">
                                    <Button component="span" className={classes.button}>
                                        Upload image
                                    </Button>
                                </label>
                         </Grid>
                        <Grid item xs={12} align="right">
                            <Button
                                variant="contained"
                                size="small"
                                color="primary"
                                className={classes.button}
                                type="submit"
                                value="submit"
                            >
                                Save
                                <SaveIcon className={classNames(classes.rightIcon, classes.iconSmall)}/>
                            </Button>
                        </Grid>
                    </Grid>
                    </form>
                </Paper>
                {this.state.giftAdded 
                             ? <CustomizedSnackbars variant= {"success"} message="Gift Added!"></CustomizedSnackbars> :
                              console.log("")}
            </main>
        )
    };
}

AddGiftContainer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddGiftContainer);

