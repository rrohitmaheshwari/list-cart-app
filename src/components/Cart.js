import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';


const styles = {
    root: {
        padding: "24px 16px",
    },
};

class Cart extends React.Component {
    render (){
    let {cartList} = this.props;
    let {handleClickCart} = this.props;
    return (
        <div className="List">
            <Paper className={this.props.classes.root}>
                <Typography variant="h5" component="h3">
                    Cart
                </Typography>
                <Divider/>
                <List component="nav" aria-label="mailbox folders">
                    {cartList && cartList.map((data, index) =>
                        <div key={index}>
                            <ListItem button onClick={() => handleClickCart(data)}>
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
}

export default withStyles(styles)(Cart);
