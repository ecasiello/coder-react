import {React, useEffect,useState} from 'react';
import { getItem } from '../components/getItem';
import ItemDetail from '../components/ItemDetail'
import {useParams} from 'react-router-dom'
import {getFirestore} from '../components/firebaseService'


function ItemDetailContainer() {
    const[product,setProduct]= useState([])
    const {productId} = useParams()

        useEffect(()=>{
            const bd= getFirestore()
            bd.collection('items').get()
            .then(resp =>resp.docs.map(item =>({...item.data(), id: item.id})))
            .then(resp => setProduct(resp.filter(item =>item.id===productId)))
            
        },productId)
        
    return (
        
        <ItemDetail product={product} />
        
    );
  }
  
  export default ItemDetailContainer