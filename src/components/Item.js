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


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Item({data}) {
    const count = (quantity)=>{
        console.log(`Has agregado ${quantity} ${data.title} a tu carrito!!`)
      }
      const classes = useStyles();
    
    return (
        
    <Grid item key={data.id}>
        <Card className={classes.root}>
            <CardHeader
              title={data.title}
            />
            <CardMedia
              className={classes.media}
              image={data.picturUrl}
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