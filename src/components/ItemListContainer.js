import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import ItemCount from './ItemCount';

const count = (quantity)=>{
  console.log(`Has agregado ${quantity} xxx a tu carrito!!`)
}

function ItemListContainer({cliente}) {

    
    return (
      <div>
        <ItemCount stock={4} initial={1} onAdd={count} />
      </div>
      
    );
  }
  
  export default ItemListContainer