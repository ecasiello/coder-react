import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {Grid, Card, CardHeader, CardMedia,CardContent,CardActions,Typography, Button} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    
    margin: 15,
  },
  card: {
    maxWidth: 190,
    margin:'auto',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  header:{
    textAlign: 'center',
    textDecoration: 'none',
  },
  content:{
    margin: 'auto 10px',
    textAlign: 'center',
  }
}));

function Item({data}) {
    
      const classes = useStyles();
    
    return (
        
    <Grid item xs={12} sm={6} md={4} lg={3} key={data.id} className={classes.root}>
        <Card className={classes.card}>
            <CardMedia component={Link,"img"} to={`/${data.category}/${data.title}/${data.id}`}
              
              alt={data.title}
              height="200"
              image={data.picturUrl}
            />
            <CardHeader component={Link} to={`/${data.category}/${data.title}/${data.id}`}
              className={classes.header}
              title={data.title}
            />
            <CardContent className={classes.content}>
              <Typography  color="textPrimary" variant="h6" component="h3">
                ${data.price}
              </Typography>
              <Typography  color="textSecondary" variant="subtitle1" component="p">
                {data.description}
              </Typography>
            </CardContent>
            <CardActions >
              <Button color="primary" variant='contained' style={{margin:'auto'}} component={NavLink} to={`/${data.category}/${data.title}/${data.id}`}>Ver mas</Button>
            </CardActions>
        </Card>
    </Grid>
    );
  }
  
  export default Item