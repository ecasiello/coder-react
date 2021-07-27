import {React, useEffect,useState} from 'react';
import ItemList from '../components/ItemList';
import {useParams} from 'react-router-dom';
import stock from '../data/stock.json'


function ItemListContainer() {

  const [productList, setProductList] = useState([]);
  const {categoryId} = useParams()

  useEffect (()=>{
    

    const getProductList = new Promise ((resolve,reject)=>{
      let status = 200
      if(status === 200){
        setTimeout(()=>{
          resolve(stock)
          },2000)
      }else{
        reject(()=>{
          console.log('error')
        })
      }
    })
        const getPromise = () =>{
          return getProductList
        }
        if(categoryId===undefined){
          getPromise()
          .then((res)=>setProductList(res))
          .catch(err =>{console.log('error')})
        }else{
          getPromise()
          .then((res)=>setProductList(res.filter(item =>item.category===categoryId)))
          .catch(err =>{console.log('error')})
        }
        
      
  },[categoryId])
    
    return (
      
      <div>
        <ItemList data={productList}/>
      </div>
      
    );
  }
  
  export default ItemListContainer