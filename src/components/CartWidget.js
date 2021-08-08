import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useCartContext } from './CartContext';


function CartWidget() {
  const { cart, setCart } = useCartContext();
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