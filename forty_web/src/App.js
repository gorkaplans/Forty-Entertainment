import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../src/components/Home'

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
