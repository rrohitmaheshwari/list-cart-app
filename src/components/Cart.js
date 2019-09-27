import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
    },
}));

function Cart(props) {
    const classes = useStyles();
    let {cartList} = props;
    return (
        <div className="List">
            <Paper className={classes.root}>
                <Typography variant="h5" component="h3">
                    Cart
                </Typography>
                <Divider/>
                <List component="nav" aria-label="mailbox folders">
                    {cartList && cartList.map((data, index) =>
                        <div key={index}>
                            <ListItem button>
                                <ListItemText primary={data}/>
                            </ListItem>
                            <Divider light/>
                        </div>
                    )}
                </List>
            </Paper>
        </div>
    );
}

export default Cart;
