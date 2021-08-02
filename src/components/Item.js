import React from 'react';
import ItemCount from './ItemCount';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import {Link} from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 365,
    margin: 45,
  },
  card: {
    maxWidth: 190,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  header:{
    textAlign: 'center',
    textDecoration: 'none',
  }
}));

function Item({data}) {
    const count = (quantity)=>{
        console.log(`Has agregado ${quantity} ${data.title} a tu carrito!!`)
      }
      const classes = useStyles();
    
    return (
        
    <Grid item key={data.id} className={classes.root}>
        <Card className={classes.card}>
            <CardMedia component={Link} to={`/${data.category}/${data.title}/${data.id}`}
              className={classes.media}
              image={data.picturUrl}
            />
            <CardHeader component={Link} to={`/${data.category}/${data.title}/${data.id}`}
              className={classes.header}
              title={data.title}
            />
            
            <CardContent>
              <Typography variant="title" color="textPrimary" component="h3">
                {data.price}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {data.description}
              </Typography>
            </CardContent>
            <CardActions>
              <ItemCount stock={4} initial={1} onAdd={count}/>
            </CardActions>
        </Card>
    </Grid>
    );
  }
  
  export default Item