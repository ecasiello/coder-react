import React, {useState,useContext} from 'react'
import {Grid,Button} from '@material-ui/core';
import ItemCount from './ItemCount';
import { Link,NavLink } from 'react-router-dom';
import { useCartContext } from './CartContext';




function ItemDetail({product}) {
    const [counter,setCounter]=useState(0)
    const [addCart,setAddCar]=useState(true)
    const { cart, setCart } = useCartContext();


    const addButton= (count) =>{
    
        setCounter(count)
        setAddCar(false)

        for (let i=0; i<=cart.length; i++){
            const index = cart.findIndex(item => product[0].id === cart[i].item[0].id)
            if(index === -1){
                setCart([...cart,{item:product,quantity:count}])
            }else{
                const newQuantity= cart[index].quantity + count
                const oldList = cart.filter(old=> cart[i].item[0].id !== product[i].id)
                setCart([...oldList,{item: product, quantity: newQuantity}])
            } ; 
            }
        
        
    }
    console.log(cart)
    //console.log(cart[0].item[0].id)

    
    
    
    
      
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
                
                 <ItemCount stock={4} initial={1} onAdd={addButton}/>
                
                    <Button component={NavLink} to='/cart' variant="contained" color="secondary" >
                            Terminar Compra
                    </Button>
                
                
            </Grid>
          </Grid> 
                  
            
            ))}
        </div>
    )
}
export default ItemDetail