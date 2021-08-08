import {React, useEffect,useState} from 'react';
import { getItem } from '../components/getItem';
import ItemDetail from '../components/ItemDetail'
import {useParams} from 'react-router-dom'


function ItemDetailContainer() {
    const[product,setProduct]= useState([])
    const {productId} = useParams()

        useEffect((res)=>{
            getItem()
                       
            .then((res)=>setProduct(res.filter(item =>item.id==productId)))
            
        },productId)
        
    return (
        
        <ItemDetail product={product} />
        
    );
  }
  
  export default ItemDetailContainer