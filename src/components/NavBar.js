import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CartWidget from './CartWidget';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <Typography variant="h6" className={classes.title}>
                logotipo
            </Typography>
          <Button color="inherit">Cervezas</Button>
          <Button color="inherit">WhisKys</Button>
          <Button color="inherit">Vinos</Button>
          <Button color="inherit">Fernet</Button>
          <Button color="inherit">Otros</Button>

          <CartWidget/>          
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar