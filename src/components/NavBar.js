import React from 'react';
import { makeStyles,AppBar,Toolbar,Typography,Button,Grid } from '@material-ui/core';
import CartWidget from './CartWidget';
import { Link,NavLink } from 'react-router-dom';
import { useCartContext } from './CartContext';



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
  const { cart } = useCartContext();
  const classes = useStyles();

  return (
      <AppBar position="sticky">
        <Toolbar>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid item>
                <Typography component={Link} to="/" variant="h6" className={classes.title}>
                      Xbebidas
                </Typography>
            </Grid>
            <Grid item>
                {categories.map(category =>(
                <Button component={NavLink} to={category.link} color="inherit" key={category.id}>{category.title}</Button>
                ))}
            </Grid>
            { cart.length <=0
            ? <div></div>
            :<Grid item>
                  <Link to="/cart">
                    <CartWidget />
                  </Link>
            </Grid>
            }
          </Grid>          
        </Toolbar>
      </AppBar>
  );
}

export default NavBar