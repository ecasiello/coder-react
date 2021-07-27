import React from 'react';
import Item from './Item';
import Grid from '@material-ui/core/Grid';




function ItemList({data}) {

    
    return (
        
            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                {data.map(product =>(
                <Item key={product.id} data={product}/>
                ))}
            </Grid>    
            
        
    );
  }
  
  export default ItemList