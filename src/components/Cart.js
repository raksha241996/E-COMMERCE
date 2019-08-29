import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import  '../styles/componentStyles/Cart.scss';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
    },
  }));

const Cart = () => {
    const classes = useStyles();

        return (
            <div class="CartBody">                
                <div id="itemListDisplay">
                    <div id="flexContainer">
                    <Paper className={classes.root} elevation="3">
                        <Typography variant="h5" component="h3">
                            This is a sheet of paper.
                        </Typography>
                        <Typography component="p">
                            Paper can be used to build surface or other elements for your application.
                        </Typography>
                    </Paper>
                    
                    <Paper className={classes.root} elevation="3">
                        <Typography variant="h5" component="h3">
                            This is a sheet of paper.
                        </Typography>
                        <Typography component="p">
                            Paper can be used to build surface or other elements for your application.
                        </Typography>
                    </Paper>
                    
                    </div>
                </div>

                <div id="priceDetails">
                    <p>Price Details</p>
                </div>
                
                
            </div>
            
        )
}

export default Cart;