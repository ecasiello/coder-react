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
        
        <ButtonGroup disableElevation variant="contained" color="primary" style={{display:'flex',justifyContent:'center',alignContent:'space-between',maxHeight:'40px'}} >
            <Button onClick={removeButton}>-</Button>
            <p style={{textAlign:'center'}} >{quantity}</p>
            <Button onClick={addButton}>+</Button>
        </ButtonGroup>
        <Button variant="contained" color="primary" onClick={handleCount}>
            Comprar !!!!
        </Button>
      </Container>
    );
  }
  
  export default ItemCount