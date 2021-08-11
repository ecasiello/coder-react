import {React, useEffect,useState} from 'react';
import { useCartContext } from './CartContext';
import { Link,NavLink } from 'react-router-dom';




function Cart() {
    
    
    const { cart, setCart } = useCartContext();
    console.log(cart)

    const removeProduct=()=>{
        const newCart = cart.filter(old=> old.id !== cart[0].id)
        console.log(newCart)
        setCart([...newCart])
    }

    let totalPrice=0
    cart.forEach(element => {
        totalPrice += element.price*element.quantity
      }); 
    
    
    return(
        cart.length <=0 ?
        <div><h1>El carrito esta vacio</h1>
        <Link to='/'><button>Volver a la tienda</button></Link>
        </div>
        :<div>
            <ul>
            {cart.map(product =>(
                <li key={product.id}>
                    <h2>Producto:{product.title}</h2>
                    <p>Cantidad: {product.quantity}</p>
                    <p>Precio Unitario: {product.price}</p>
                    <p>Precio Total :{product.quantity*product.price}</p>
                    <button onClick={removeProduct}>Eliminar</button>
                </li>
            ))}
            </ul>
            <p>Total a pagar :{totalPrice}</p>
        </div>

        
    )
}
export default Cart