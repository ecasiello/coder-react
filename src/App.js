import { Button } from "@material-ui/core";
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from "./containers/ItemDetailContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer cliente ='Emmanuel'/>
      <ItemDetailContainer />
      
    </div>
  );
}

export default App;
