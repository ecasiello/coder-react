import React from 'react';
import { useCartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography} from '@material-ui/core';



const useStyles = makeStyles({
    container: {
        maxWidth: 900,
    },
    
    table: {
      minWidth: 600,
    },
  });

function Cart() {
    const classes = useStyles();
    const { cart, setCart } = useCartContext([]);
    

    const removeProduct=()=>{
        const newCart = cart.filter(old=> old.id !== cart[0].id)
        setCart([...newCart])
    }

    let totalPrice=0
    cart.forEach(element => {
        totalPrice += element.price*element.quantity
      });

    

    
    return(
        cart.length <=0 ?
        <div><h1>El carrito esta vacio</h1>
        <Link to='/'><button>Volver a la tienda</button></Link>
        </div>
        :<div>
            <TableContainer className={classes.container} style={{margin:' 30px auto'}} component={Paper}>
            <Typography variant="h4" style={{margin:'15px 10px'}}>
                Detalle de tu compra
            </Typography>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Producto</TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">Precio Unidad</TableCell>
                        <TableCell align="right">Cantidad</TableCell>
                        <TableCell align="right">Precio total</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {cart.map((product) => (
                        <TableRow key={product.id}>
                        <TableCell component="th" scope="row">
                            {product.title}
                            
                        </TableCell>
                        <TableCell align="right"><button onClick={removeProduct}>Eliminar</button></TableCell>
                        <TableCell align="right">{product.price}</TableCell>
                        <TableCell align="right">{product.quantity}</TableCell>
                        <TableCell align="right">{product.quantity*product.price}</TableCell>
                        </TableRow>
                         
                    ))}
                    
                    </TableBody>   
                </Table>
            </TableContainer>
            <h4 style={{textAlign:'center'}}>Total: {totalPrice}</h4>
           
              
        </div>

        
    )
}
export default Cart