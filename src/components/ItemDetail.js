import React, {useState} from 'react'
import {Grid, Typography} from '@material-ui/core';
import ItemCount from './ItemCount';
import { useCartContext } from './CartContext';


function ItemDetail({product}) {
    const [counter, setCounter]=useState(0)
    const [addCar,setAddCar]=useState(true)
    const { cart, setCart } = useCartContext();

    const addButton= (count) =>{
        setCounter(count)
        setAddCar(false)
            const index = cart.findIndex(item => product[0].id === item.id)
            
            if(index === -1){
                setCart([...cart,{id:product[0].id,title:product[0].title , price:product[0].price , quantity:count}])
            }else{
                const newQuantity= cart[index].quantity + count
                const oldList = cart.filter(old=> old.id !== product[0].id)
                setCart([...oldList,{id:product[0].id,title:product[0].title, price:product[0].price , quantity: newQuantity}])
            } ; 
    }
    return(
        <div>
            {product.map(item => (
            <Grid key= {item.id} container direction="row" justifyContent='space-around' alignItems="center">
            <Grid item>
                <img src={item.picturUrl} alt={item.name}/>
            </Grid>
            <Grid item >
                <Typography variant="h3">Nombre :{item.title}</Typography> 
                <Typography variant="h5">Precio :{item.price}</Typography>
                <ItemCount stock={4} initial={1} onAdd={addButton}/>   
            </Grid>
          </Grid>  
            ))}
        </div>
    )
}
export default ItemDetail