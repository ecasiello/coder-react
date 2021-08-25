import {React, useEffect,useState} from 'react';
import ItemDetail from '../components/ItemDetail'
import {useParams} from 'react-router-dom'
import {getFirestore} from '../components/firebaseService'
import Loader from '../components/Loader';


function ItemDetailContainer() {
    const[product,setProduct]= useState([])
    const[load,setLoad]= useState(true)
    const {productId} = useParams()
    
    

        useEffect(()=>{
            const bd= getFirestore()
            bd.collection('items').get()
            .then(resp =>resp.docs.map(item =>({...item.data(), id: item.id})))
            .then(resp => setProduct(resp.filter(item =>item.id===productId)))
            .finally(()=>setLoad(false))
        },[productId])
        
        
        
    return (
        load?
        <Loader />
        :<ItemDetail product={product} />
        
    );
  }
  
  export default ItemDetailContainer