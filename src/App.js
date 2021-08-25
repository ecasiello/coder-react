import NavBar from './components/NavBar';
import Home from "./pages/Home";
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import CartContextProvider from './components/CartContext';
import Checkout from './pages/Checkout';



function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cart">
            <Checkout />
          </Route>
          <Route exact path="/:categoryId">
            <ItemListContainer />
          </Route>
          <Route exact path="/:categoryId/:productTitle/:productId">
            <ItemDetailContainer />
          </Route>
          
        </Switch>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
