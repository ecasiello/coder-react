
let stock = [
    {id :0,title : 'Stella' ,category:'cerveza',description: 'Cerveza rubia',price: 190,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
    {id :1,title : 'Quilmes' ,category:'cerveza',description: 'Cerveza rubia',price: 110,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
    {id :2,title : 'Imperial' ,category:'cerveza',description: 'Cerveza rubia',price: 185,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
    {id :3,title : 'Stella Stout' ,category:'cerveza',description: 'Cerveza negra',price: 240,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
    {id :4,title : 'Quilmes Stout' ,category:'cerveza',description: 'Cerveza negra',price: 160,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
    {id :5,title : 'Heiniken' ,category:'cerveza',description: 'Cerveza rubia',price: 220,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
    {id :6,title : 'Bhrama' ,category:'cerveza',description: 'Cerveza rubia',price: 130,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
    {id :7,title : 'Corona' ,category:'cerveza',description: 'Cerveza rubia',price: 240,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
    {id :8,title : 'Old Parr' ,category:'whiskys',description: '18 years',price: 240,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
    {id :9,title : 'Chivas Regal' ,category:'whiskys',description: '18 years',price: 240,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
    {id :10,title : 'Casillero del Diablo' ,category:'vinos',description: 'Malbec',price: 240,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
    {id :11,title : 'San Telmo' ,category:'vinos',description: 'Malbec',price: 240,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
    {id :12,title : 'Fernet Branca' ,category:'fernet',description: '.750 ml',price: 240,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
    {id :13,title : 'Buhero Negro' ,category:'fernet',description: '.750 ml',price: 240,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
    {id :14,title : 'Baileys' ,category:'otros',description: 'Licor digestivo',price: 240,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
    {id :15,title : 'Frangelico' ,category:'otros',description: 'Licor digestivo',price: 240,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
    {id :16,title : 'Amarula' ,category:'otros',description: 'Licor digestivo',price: 240,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
    {id :17,title : 'Borghetti' ,category:'otros',description: 'Licor digestivo',price: 240,picturUrl :'https://puntodeventa.ar/wp-content/uploads/2021/02/37-9-2.png'},
  ]
  
  const promise = new Promise((res) => {
      res(stock)
  }, 3000)

  console.log(promise)

  export const getItem=()=>{
      return promise
  }