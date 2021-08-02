import {React,useState} from 'react'
import {ButtonGroup,Button,Container} from '@material-ui/core';




function ItemCount({stock , initial, onAdd, add, remove,quantity }) {
    /*const [quantity,setQuantity] = useState(1)
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
    }*/
        
    return (
    
      <Container>
        
        <ButtonGroup disableElevation variant="contained" color="primary" style={{display:'flex',justifyContent:'center',alignContent:'space-between',maxHeight:'45px'}} >
            <Button onClick={remove}>-</Button>
            <p style={{textAlign:'center'}} >{quantity}</p>
            <Button  onClick={add}>+</Button>
        </ButtonGroup>
        <Button variant="contained" color="primary" onClick={onAdd}>
            Comprar !!!!
        </Button>
      </Container>
    );
  }
  
  export default ItemCount