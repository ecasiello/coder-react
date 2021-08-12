import {React, useEffect,useState} from 'react';
import { makeStyles} from '@material-ui/core';
import { useCartContext } from './CartContext';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {getFirestore} from './firebaseService'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function BasicTextFields() {
  const classes = useStyles();
    
  const { cart, setCart } = useCartContext([]);
    const [buyer,setBuyer] = useState(initial)
    const handlerChange= (evt) =>{
        setBuyer({
            ...buyer,
            [evt.target.name]: evt.target.value
        })
    }
    
    console.log(buyer)

    const order= {buyer: buyer,items: cart}
    console.log(order)

    const handlerSubmit = (evt) => {
        evt.preventDefault()
        console.log(buyer.email)
        console.log(buyer.emailConfirm)
        if(buyer.email === buyer.emailConfirm){
            const bd = getFirestore()
            bd.collection('orders').add(order)
        }else{
            alert('Verifica tu email por favorcito')
        }
        
        
    }


    

  return (
    <div>
        <h1>Finaliza tu compra</h1>
        <form className={classes.root} onChange={handlerChange}>
            
            <TextField id="name" label="Nombre" name="name" value={buyer.name} />
            <TextField id="phone" label="Telefono" name="phone" value={buyer.phone} />
            <TextField id="email" label="Correo" name="email" value={buyer.email}/>
            <TextField id="emailConfirm" label="Confirma Correo" value={buyer.emailConfirm} name="emailConfirm" />
            
            <Button variant="contained" color="primary" onClick={handlerSubmit}>
                Enviar
            </Button>
            
        </form>
    </div>
  );
}

export default BasicTextFields
const initial = {
    name : '',
    phone : '',
    email: ''
}

