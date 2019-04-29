import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import ListSubheader from "@material-ui/core/ListSubheader";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";

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
        width: "60%",
        height: "80%"
        //height: 450
    },
    icon: {
        color: theme.palette.secondary.main
    }
});

//this will get filled with gift images from the DB
const tileData = [
    {
        img: "https://images.unsplash.com/photo-1534474174078-24c09f689d06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1378&q=80",
        title: "Harry Potter Tshirt",
        author: "k8",
        cols: 2, 
        featured: true
    },
    {
        img: "https://images.unsplash.com/photo-1546704864-07235973413d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
        title: "Chess set",
        author: "k8"
    },
    {
        img: "https://images.unsplash.com/photo-1540023880013-b76d9157bd54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        title: "Lotion",
        author: "k8",
    },
    {
        img: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        title: "Nars Concealer in shade Vanilla",
        author: "k8",
        featured: true
    },
    {
        img: "https://images.unsplash.com/photo-1549122728-f519709caa9c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80",
        title: "New journal",
        author: "k8"
    },
    {
        img: "https://images.unsplash.com/photo-1523251691580-613e117a75e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        title: "Necklace from vendor at Pike Place Market",
        author: "k8"
    },
    {
        img: "https://images.unsplash.com/photo-1538376029023-db00b46042c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
        title: "Flowers",
        author: "k8",
        cols: 2
    },
    {
        img: "https://images.unsplash.com/photo-1540872118096-473d684d6fbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        title: "Blue Crystal Ring",
        author: "k8",
    },
    {
        img: "https://images.unsplash.com/photo-1497431187953-886f6a75d2a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "Art Box Subscription",
        author: "k8",
    },
    {
        img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "Massage",
        author: "k8"
    },
    {
        img: "https://images.unsplash.com/photo-1519638831568-d9897f54ed69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "Canon Camera",
        cols: 2,
        author: "k8" 
    },
    {
        img: "https://images.unsplash.com/photo-1502929254524-5e4f51903baa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        title: "Sunglasses",
        author: "k8"
    }

];

function GiftGridList(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <GridList cellHeight={160} className={classes.gridList} cols={3}>
                <GridListTile key="Subheader" cols={2} style={{ height: "auto" }}>
                    <ListSubheader component="div">Gift List</ListSubheader>
                </GridListTile>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} cols={tile.cols || 1}>
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            // subtitle={<span>by: {tile.author}</span>}
                            style={{ fontFamily: gridFont }}
                            actionIcon={
                                <IconButton className={classes.icon}>
                                    <InfoIcon /> 
                                </IconButton>
                            }
                         />
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
} 

GiftGridList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GiftGridList);