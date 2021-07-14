import { Button } from "@material-ui/core";
import NavBar from './NavBar'
import ItemListContainer from './ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer cliente ='Emmanuel'/>
      
    </div>
  );
}

export default App;
