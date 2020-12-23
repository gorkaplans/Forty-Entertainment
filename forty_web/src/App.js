import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Manifest from './pages/Manifest';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/Manifest" exact>
            <Manifest />
        </Route>
        <Route path="/Contact" exact>
            <Contact />
        </Route>
        <Route path="/Projects" exact>
            <Projects />
        </Route>
      </Switch>  
    </Router>
  </div>
  );
}

export default App;
