import {React,useState} from 'react'
import {Button,Container,Box} from '@material-ui/core';




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
        <Box width="40%" variant="contained" color="primary" style={{display:'flex',alignContent:'space-between',margin:'20px 0'}} >
            <Button onClick={removeButton}>-</Button>
            <p style={{textAlign:'center',minWidth:'30px'}}>{quantity}</p>
            <Button variant="contained"  onClick={addButton}>+</Button>
        </Box>
        <Button variant="contained" color="primary" onClick={handleCount}>
            Comprar !!!!
        </Button>
      </Container>
    );
  }
  
  export default ItemCount