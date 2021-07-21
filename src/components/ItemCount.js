import {React,useState} from 'react'
import {ButtonGroup,Button,Container} from '@material-ui/core';




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
        
        <ButtonGroup disableElevation variant="contained" color="primary" >
            <p>{quantity}</p>
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