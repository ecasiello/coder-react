import {React,useState} from 'react';
import { makeStyles, Button, TextField} from '@material-ui/core';
import { useCartContext } from './CartContext';
import {getFirestore} from './firebaseService'
import firebase from 'firebase/app'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    boxForm : {
      maxWidth: '50 %',
      margin: 'auto',
    },
  },
}));

const initial = {
  name : '',
  phone : '',
  email: '',
  emailConfirm: '',
}

function BuyerForm() {
  const classes = useStyles();
    
  const { cart } = useCartContext([]);
    const [buyer,setBuyer] = useState(initial)
    const handlerChange= (evt) =>{
        setBuyer({
            ...buyer,
            [evt.target.name]: evt.target.value
        })
    }
    
    const order= {buyer: buyer,items: cart, date:firebase.firestore.Timestamp.fromDate(new Date())}
    
    const handlerSubmit = (evt) => {
        evt.preventDefault()
        if(buyer.email === buyer.emailConfirm && buyer.name !== '' && buyer.phone !=='' && buyer.email !==''){
            const bd = getFirestore()
            bd.collection('orders').add(order)
            .then(resp=> alert(`Gracias por tu compra. Tu numero de orden es ${resp.id}`))
            
        }else{
            alert('Verifica que tus datos estan completos y/o verifica tu mail')
        }   
    }
    return (
    <div style={{margin : '50px 40%'}}>
        <h1>Finaliza tu compra</h1>
        <form className={classes.root} onChange={handlerChange}>
            
            <TextField style={{display : 'block'}} id="name" label="Nombre" name="name" value={buyer.name} />
            <TextField style={{display : 'block'}} id="phone" label="Telefono" name="phone" value={buyer.phone} />
            <TextField style={{display : 'block'}} id="email" label="Correo" name="email" value={buyer.email}/>
            <TextField style={{display : 'block'}} id="emailConfirm" label="Confirma Correo" value={buyer.emailConfirm} name="emailConfirm" />
            
            <Button variant="contained" color="primary" onClick={handlerSubmit}>
                Enviar
            </Button>
            
        </form>
    </div>
  );
}


export default BuyerForm


