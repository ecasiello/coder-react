import React, {useState} from 'react'
import {Grid} from '@material-ui/core';
import ItemCount from './ItemCount';

function ItemDetail({product}) {
    const [quantity,setQuantity]=useState(1)
    const stock=4
    const initial=1
    

    const addButton= () =>{
        if(quantity < stock){
            setQuantity(quantity + 1)
        }
    }
    const removeButton= () =>{
        if(quantity > initial){
            setQuantity(quantity - 1)
        }
    }
    const handleCount = () =>{
        setQuantity(quantity)
        console.log(quantity)
        
        
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
                { quantity!=0
                ?    <ItemCount add={addButton} remove={removeButton} onAdd={handleCount} quantity={quantity}/>
                :    <button>Terminar Compra</button>
                }
            </Grid>
          </Grid>          
            
            ))}
        </div>
    )
}
export default ItemDetail