import stock from '../data/stock.json'

  
  const promise = new Promise((res) => {
      res(stock)
  }, 3000)

  console.log(promise)

  export const getItem=()=>{
      return promise
  }