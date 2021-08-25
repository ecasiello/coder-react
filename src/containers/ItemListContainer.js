import {React, useEffect,useState} from 'react';
import ItemList from '../components/ItemList';
import {useParams} from 'react-router-dom';
import {getFirestore} from '../components/firebaseService'
import { Typography } from '@material-ui/core';
import Loader from '../components/Loader';



function ItemListContainer() {

  const [productList, setProductList] = useState([]);
  const {categoryId} = useParams()
  const[load,setLoad]= useState(true)

  useEffect (()=>{
    
    if(categoryId===undefined){
            const bd= getFirestore()
                    bd.collection('items').get()
                    .then(resp =>setProductList(resp.docs.map(item =>({...item.data(), id: item.id}))))
                    .finally(()=>setLoad(false))
          }else{
            const bd= getFirestore()
                    bd.collection('items').get()
                    .then(resp =>resp.docs.map(item =>({...item.data(), id: item.id})))
                    .then(resp => setProductList(resp.filter(item =>item.category===categoryId)))
                    .finally(()=>setLoad(false))
          }           
  },[categoryId])
      return (
      categoryId === undefined?
      <div>
        {load?
        <Loader />
        :<ItemList data={productList}/>}
      </div>
      :<div>
        {load?
        <Loader />
        :<div>
          <Typography style={{margin:'50px', textAlign:'center'}} variant="h2">
          {categoryId.toUpperCase()}
          </Typography>
          <ItemList data={productList}/>
        </div>}
      </div>
      
    );
  }
  
  export default ItemListContainer