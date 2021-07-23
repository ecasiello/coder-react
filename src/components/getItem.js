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

  const promise = new Promise((res) => {
      res(stock.filter((product=>product.id===0)))
  }, 3000)

  export const getItem=()=>{
      return promise
  }