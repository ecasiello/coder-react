import React from 'react';
import { makeStyles,AppBar,Toolbar,Typography,Button,Grid } from '@material-ui/core';
import CartWidget from './CartWidget';
import { Link,NavLink } from 'react-router-dom';



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
              <Link to="/">
                <Typography variant="h6" className={classes.title}>
                      Xbebidas
                </Typography>
              </Link>
            </Grid>
            <Grid item>
                <NavLink to="/cerveza"><Button color="inherit">Cervezas</Button></NavLink>
                <NavLink to="/whiskys"><Button color="inherit">Whiskys</Button></NavLink>
                <NavLink to="/vinos"><Button color="inherit">Vinos</Button></NavLink>
                <NavLink to="/fernet"><Button color="inherit">Fernet</Button></NavLink>
                <NavLink to="/otros"><Button color="inherit">Otros</Button></NavLink>
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