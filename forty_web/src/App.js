import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Landing from '../src/components/Landing';

function App() {
  return (
    <div className="App">
      <Landing/>
    </div>
  );
}

export default App;
