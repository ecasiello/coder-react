import React from 'react'
import { useCartContext } from './CartContext';



function Cart() {
         
    const { cart } = useCartContext();
    
    return(
        <div>
            <h1>Carrito</h1>
        </div>
    )
}
export default Cart