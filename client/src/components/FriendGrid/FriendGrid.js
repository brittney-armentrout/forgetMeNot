import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Grid, GridList, GridListTile } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const gridFont = "'Roboto', sans-serif";

const styles = theme => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper
    },
    gridList: {
        width: "100%",
        height: "100%"
    }
});

//this will get filled with friend images from the DB
const tileData = [
    {
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        title: "Daisy"
    },
    {
        img: "https://images.unsplash.com/photo-1541418950054-c12804e149d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        title: "Mark"
    },
    {
        img: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "Alex"
    },
    {
        img: "https://images.unsplash.com/photo-1513732822839-24f03a92f633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        title: "Frankie"
    },
    {
        img: "https://images.unsplash.com/photo-1548534995-6e085e3e8f3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        title: "Jane"
    },
    {
        img: "https://images.unsplash.com/photo-1533512930330-4ac257c86793?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
        title: "Liam"
    }
];

function FriendGrid(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid item xs={12} md={6}>
                <Paper className={classes.root} elevation={10}>
                    <GridList className={classes.gridList} cols={3}>
                        {tileData.map(tile => (
                            <GridListTile key={tile.img} cols={tile.cols || 1}>
                                <img src={tile.img} alt={tile.title} />
                            </GridListTile>
                        ))}
                    </GridList>
                </Paper>
            </Grid>
        </div>
    );
}

FriendGrid.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(FriendGrid);