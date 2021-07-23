import {React, useEffect,useState} from 'react';
import { getItem } from '../components/getItem';
import ItemDetail from '../components/ItemDetail'


function ItemDetailContainer() {
    const[product,setProduct]= useState([])

        useEffect((res)=>{
            getItem()
            .then((res)=>setProduct(res))
        },[])
        console.log(product)
    return (
        
        <ItemDetail product={product} />
        
    );
  }
  
  export default ItemDetailContainer