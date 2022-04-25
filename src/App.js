import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCounts from './components/ItemCounts';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
      <ItemCounts/>
    </div>
  );
}

export default App;
