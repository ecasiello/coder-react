import React from 'react';
import { makeStyles,AppBar,Toolbar,Typography,Button,Grid } from '@material-ui/core';
import CartWidget from './CartWidget';
import { Link,NavLink } from 'react-router-dom';

const categories= [
  {
    "id":"a",
    "title" : "Cervezas",
    "link":"/cerveza"
  },
  {
    "id":"b",
    "title" : "Whiskys",
    "link":"/whiskys"
  },
  {
    "id":"c",
    "title" : "Vinos",
    "link":"/vinos"
  },
  {
    "id":"d",
    "title" : "Fernet",
    "link":"/fernet"
  },
  {
    "id":"e",
    "title" : "Otros",
    "link":"/otros"
  }
]

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
                {categories.map(category =>(
                <Button color="inherit" key={category.id}><NavLink to={category.link}>{category.title}</NavLink></Button>
                ))}
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