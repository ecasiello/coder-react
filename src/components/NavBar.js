import React from 'react';
import { makeStyles,AppBar,Toolbar,Typography,Button,Grid } from '@material-ui/core';
import CartWidget from './CartWidget';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 0,
    marginRight: theme.spacing(2),
  },
  
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item>
                <Typography variant="h6" className={classes.title}>
                      logotipo
                </Typography>
            </Grid>
            <Grid item>
                <Button color="inherit">Cervezas</Button>
                <Button color="inherit">WhisKys</Button>
                <Button color="inherit">Vinos</Button>
                <Button color="inherit">Fernet</Button>
                <Button color="inherit">Otros</Button>
            </Grid>
            <Grid item>
                <CartWidget/>
            </Grid>
          </Grid>          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar