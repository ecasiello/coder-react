import { Button } from "@material-ui/core";
import NavBar from './components/NavBar';
import Home from "./pages/Home";
import {BrowserRouter, Switch, Route} from 'react-router-dom'; 
import ProductDetail from "./pages/ProductDetail";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/:categoryId">
            <ItemListContainer />
          </Route>
          <Route exact path="/:categoryId/:productTitle/:productId">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>

    </BrowserRouter>
  );
}

export default App;
