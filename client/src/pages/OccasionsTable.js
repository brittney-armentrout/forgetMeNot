import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import Grid from "@material-ui/core/Grid";

let counter = 0;
function createData(occasion, date) {
    counter += 1;
    return { id: counter, occasion, date};
}

const columnData = [
    { id: "occasion", numeric: false, disablePadding: false, label: "Occasion" },
    { id: "date", numeric: false, disablePadding: false, label: "Date" },
    { id: "gift", numeric: false, disablePadding: false, label: "Gift?" }
];

const listFont = "'Roboto', sans-serif";

class OccasionsTableHead extends React.Component {
    createSortHandler = property => event => {
        this.props.onRequestSort(event, property)
    };

    render() {
        const {
            onSelectAllClick,
            order,
            orderBy,
            numSelected,
            rowCount
        } = this.props;

        return (
            <TableHead>
                <TableRow>
                    {/* <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={numSelected > 0 && numSelected < rowCount}
                            checked={numSelected === rowCount}
                            onChange={onSelectAllClick}
                        />
                    </TableCell> */}
                    {columnData.map(column => {
                        return (
                            <TableCell  
                                key={column.id}
                                numeric={column.numeric}
                                padding={column.disablePadding ? "none" : "default"}
                                sortDirection={orderBy === column.id ? order : false}
                            >
                            <Tooltip
                                title="Sort"
                                placement={column.numeric ? "bottom-end" : "bottom-start"}
                                enterDelay={300}
                            >
                            <TableSortLabel
                                active={orderBy === column.id}
                                direction={order}
                                onClick={this.createSortHandler(column.id)}
                            >
                                {column.label}
                        
                            </TableSortLabel>                        
                            </Tooltip>
                            </TableCell>
                        );
                    }, this)}
                </TableRow>
            </TableHead>
        );  
    }
}

OccasionsTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.string.isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired
};

const toolbarStyles = theme => ({
    root: {
        paddingRight: theme.spacing.unit
    },
    highlight:
        theme.palette.type === "light"
            ? {
                color: theme.palette.secondary.main,
                backgroundColor: lighten(theme.palette.secondary.light, 0.85)
            }
        :   {
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.secondary.dark
            },
    spacer: {
        flex: "1 1 100%"
    },
    actions: {
        color: theme.palette.text.secondary
    },
    title: {
        flex: "0 0 auto"
    }
});

let OccasionsTableToolbar = props => {
    const { numSelected, classes } = props;

    return (
        <Toolbar
            className={classNames(classes.root, {
                [classes.highlight]: numSelected > 0
            })}
        >
        <div className={classes.title}>
            {numSelected > 0 ? (
                <Typography color="inherit" variant="subheading">
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography variant="title" id="tableTitle">
                {/* Gift Purchasing Tracker */}
                </Typography>
            )}
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
                {numSelected > 0 ? (
                    <Tooltip title="Delete">
                        <IconButton aria-label="Delete">
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Filter List">
                        <IconButton aria-label="Filter List">
                            {/* <FilterListIcon /> */}
                        </IconButton>
                    </Tooltip>
                )}
        </div>
    </Toolbar>
    );
};

OccasionsTableToolbar.propTypes = {
    classes: PropTypes.object.isRequired,
    numSelected: PropTypes.number.isRequired
};

OccasionsTableToolbar = withStyles(toolbarStyles)(OccasionsTableToolbar);

const styles = theme => ({
    root: {
        marginTop: theme.spacing.unit * 3
    },
    table: {
        minWidth: 1020,
        textAlign: 'center'
    },
    tableWrapper: {
        overflowX: "auto"
    }
});

class OccasionsTable extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            order: "asc",
            orderBy: "date",
            selected: [],
            data: [
                createData("Wedding", "01/10/2020"),
                createData("Birthday", "10/10/1982"),
                createData("Graduation", "05/10/2019")
            ].sort((a, b) => (a.date < b.date ? -1 : 1)),
            page: 0,
            rowsPerPage: 5
        };
    }

    handleRequestSort = (event, property) => {
        const orderBy = property;
        let order = "desc";

        if (this.state.orderBy === property && this.state.order === "desc") {
            order = "asc";
        }

        const data = 
            order === "desc"
                ? this.state.data.sort((a, b) => (b[orderBy] < a[orderBy] ? -1 : 1))
                : this.state.data.sort((a, b) => (a[orderBy] < b[orderBy] ? -1 : 1));

        this.setState({ data, order, orderBy });
    };

    handleSelectAllClick = (event, checked) => {
        if (checked) {
            this.setState({ selected: this.state.data.map(n => n.id) });
        }
        this.setState({ selected: [] });
    };

    handleClick = (event, id) => {
        const { selected } = this.state;
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length -1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            );
        }

        this.setState({ selected: newSelected });
    };

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleRowsPerPage = event => {
        this.setState({ rowsPerPage: event.target.value });
    };

    isSelected = id => this.state.selected.indexOf(id) !== -1;

    render() {
        const { classes } = this.props;
        const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
        const emptyRows = 
            rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
        
        return (
            <Grid 
                container 
                spacing={24}
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={8}>
                    <Paper className={classes.root}>
                        <OccasionsTableToolbar numSelected={selected.length} />
                        <div className={classes.tableWrapper}>
                            <Table className={classes.table} aria-labelledby="tableTitle">
                                <OccasionsTableHead 
                                    numSelected={selected.length}
                                    order={order}
                                    orderBy={orderBy}
                                    onSelectAllClick={this.handleSelectAllClick}
                                    onRequestSort={this.handleRequestSort}
                                    rowCount={data.length}
                                />
                                <TableBody>
                                    {data
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map(n => {
                                            const isSelected = this.isSelected(n.id);
                                            return (
                                                <TableRow
                                                    hover
                                                    onClick={event => this.handleClick(event, n.id)}
                                                    role="checkbox"
                                                    aria-checked={isSelected}
                                                    tabIndex={-1}
                                                    key={n.id}
                                                    selected={isSelected}
                                                >
                                                    <TableCell 
                                                        component="th" 
                                                        scope="row" 
                                                        padding="20px"
                                                        style={{ fontFamily: listFont }}
                                                    >
                                                    {n.occasion}
                                                    </TableCell>
                                                    <TableCell number style={{ fontFamily: listFont }}>{n.date}</TableCell>
                                                    <TableCell padding="checkbox">
                                                        <Checkbox checked={isSelected} />
                                                    </TableCell>
                                                </TableRow>
                                            );
                                    })}
                                    {emptyRows > 0 && (
                                        <TableRow style={{ height: 49 * emptyRows }}>
                                            <TableCell colSpan={6} />
                                        </TableRow>
                                    )}
                                </TableBody>
                            </Table>
                        </div>
                    <TablePagination 
                        component="div"
                        count={data.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        backIconButtonProps={{
                            "aria-label": "Previous Page"
                        }}
                        nextIconButtonProps={{
                            "aria-label": "Next Page"
                        }}
                        onChangePage={this.handleChangePage}
                        onChangeRowsPerPage={this.handleChangeRowsPerPage}
                    />
                </Paper>
            </Grid>
        </Grid>
        );
    }
}

OccasionsTable.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(OccasionsTable);