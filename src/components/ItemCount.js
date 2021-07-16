import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {useState} from 'react'



function ItemCount({stock , initial, onAdd }) {
    const [quantity,setQuantity] = useState(1)
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
        onAdd(quantity)
    }
        
    return (
    
      <Container>
        <p>{quantity}</p>
        <ButtonGroup disableElevation variant="contained" color="primary" >
            <Button onClick={removeButton}>-</Button>
            <Button onClick={addButton}>+</Button>
        </ButtonGroup>
        <Button variant="contained" color="primary" onClick={handleCount}>
            Agregar al carrito
        </Button>
      </Container>
    );
  }
  
  export default ItemCount