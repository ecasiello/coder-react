import React, { useState } from 'react';
import BuyerForm from '../components/BuyerForm';
import Cart from '../components/Cart';
import { Button } from '@material-ui/core';
import { useCartContext } from '../components/CartContext';


function Checkout() {
  const[confirm,setConfirm]= useState(false)
  const { cart } = useCartContext([]);
  
  
  let confirmed =()=>{
    setConfirm(true)
  }

  return (
    
    <div>
      
      <Cart />
      {cart.length===0 ? 
        <></>
        :<div style={{margin:'0 auto',display:'flex',justifyContent:'center'}}><Button variant='contained' color='primary' onClick={confirmed} >Finalizar compra</Button></div>
      }
      
      {confirm?
      <BuyerForm />
      :<div></div>
      }
                      
    
      
    </div>
  );
}

export default Checkout;