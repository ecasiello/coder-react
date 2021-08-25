import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useCartContext } from './CartContext';


function CartWidget() {
  const { cart } = useCartContext();
  let accu = 0
  cart.forEach(element => {
    accu += element.quantity
  }); 
  
      
    return (
      <div>
        <ShoppingCartIcon />
        <span>{accu}</span>
      </div>
    );
  }
  
  export default CartWidget