import {React, useEffect,useState} from 'react';
import ItemList from '../components/ItemList';
import {useParams} from 'react-router-dom';
import stock from '../data/stock.json'
import {getFirestore} from '../components/firebaseService'


function ItemListContainer() {

  const [productList, setProductList] = useState([]);
  const {categoryId} = useParams()

  useEffect (()=>{
    
    if(categoryId===undefined){
            const bd= getFirestore()
                    bd.collection('items').get()
                    .then(resp =>setProductList(resp.docs.map(item =>({...item.data(), id: item.id}))))
                    console.log(productList)
          }else{
            const bd= getFirestore()
                    bd.collection('items').get()
                    .then(resp =>resp.docs.map(item =>({...item.data(), id: item.id})))
                    .then(resp => setProductList(resp.filter(item =>item.category===categoryId)))
            console.log(productList)
          }
        
        /*if(categoryId===undefined){
          getPromise()
          .then((res)=>setProductList(res))
          .catch(err =>{console.log('error')})
        }else{
          getPromise()
          .then((res)=>setProductList(res.filter(item =>item.category===categoryId)))
          .catch(err =>{console.log('error')})
        }*/
        
      
  },[categoryId])
  console.log(productList)
  
    
    return (
      
      <div>
        <ItemList data={productList}/>
      </div>
      
    );
  }
  
  export default ItemListContainer