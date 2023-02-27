import logo from './logo.svg';
import './App.css';
import Search from './components/Searchbar/Search';

function App() {
  return (
    <div className="App">
      <h2 style={{'margin':"0", "fontSize":"48px"}}>Weather App</h2>
       <Search/>
    </div>
  );
}

export default App;
