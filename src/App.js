import { Button } from "@material-ui/core";
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer cliente ='Emmanuel'/>
      
    </div>
  );
}

export default App;
