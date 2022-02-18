import AllCharacters from './components/AllCharacters';
import Header from './components/Header';
import NewCharacter from './components/NewCharacter';
import OneCharacter from './components/OneCharacter';
import { Router } from '@reach/router'
import './App.css';




function App() {


  return (
    <div className="App">




      <Router>
        <AllCharacters path='/' />

        <NewCharacter path='/new' />

        <OneCharacter path='/character/:id' />

      </Router>
    </div>
  );
}



export default App;
