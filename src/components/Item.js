import React from 'react';
import ItemCount from './ItemCount';
import Grid from '@material-ui/core/Grid';



function Item({data}) {
    const count = (quantity)=>{
        console.log(`Has agregado ${quantity} ${data.title} a tu carrito!!`)
      }
    
    return (
        <Grid Item key={data.id}>
            
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <h3>{data.price}</h3>
            <ItemCount stock={4} initial={1} onAdd={count}/>
        </Grid>
    );
  }
  
  export default Item