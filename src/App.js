import logo from './logo.svg';
import { BrowserRouter, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import CandyBar from "./CandyBar";
import Chips from "./Chips";
import Soda from './Soda';
import './App.css';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Route exact path="/"><VendingMachine /></Route>
      <Route exact path="/"><CandyBar /></Route>
      <Route exact path="/"><Chips /></Route>
      <Route exact path="/"><Soda /></Route>
    </BrowserRouter>
    </div>
  );
}

export default App;
