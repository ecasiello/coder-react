import {React, useEffect,useState} from 'react';
import ItemList from '../components/ItemList';


function ItemListContainer() {

  const [productList, setProductList] = useState([])

  useEffect (()=>{
    let stock = [
      {id :0,title : 'Stella' ,description: 'Cerveza rubia',price: 190,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
      {id :1,title : 'Quilmes' ,description: 'Cerveza rubia',price: 110,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
      {id :2,title : 'Imperial' ,description: 'Cerveza rubia',price: 185,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
      {id :3,title : 'Stella Stout' ,description: 'Cerveza negra',price: 240,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
      {id :4,title : 'Quilmes Stout' ,description: 'Cerveza negra',price: 160,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
      {id :5,title : 'Heiniken' ,description: 'Cerveza rubia',price: 220,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
      {id :6,title : 'Bhrama' ,description: 'Cerveza rubia',price: 130,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
      {id :7,title : 'Corona' ,description: 'Cerveza rubia',price: 240,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'}
    ]

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
        getPromise()
        .then((res)=>setProductList(res))
        .catch(err =>{console.log('error')})
      
    },[])
    //console.log(productList)
    
    return (
      
      <div>
        
        <ItemList data={productList}/>
      </div>
      
    );
  }
  
  export default ItemListContainer