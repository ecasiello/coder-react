import React from 'react'
import {Grid} from '@material-ui/core';
import ItemCount from './ItemCount';

function ItemDetail({product}) {
    const count = (quantity)=>{
        console.log(`Has agregado ${quantity} ${product.title} a tu carrito!!`)
      }
    return(
        <div>
            {product.map(item => (
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
            
            <Grid item>
            <img src={item.picturUrl}/>
            </Grid>
            <Grid item>
                <h1>Nombre :{item.title}</h1>
                <h2>Precio :{item.price}</h2>
                <ItemCount stock={4} initial={1} onAdd={count}/>
            </Grid>
          </Grid>          
            
            ))}
        </div>
    )
}
export default ItemDetail