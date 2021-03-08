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
import Privacy from './pages/Privacy';
import ProjectDetail from './components/ProjectDetail/ProjectDetail';

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
        <Route path="/Privacy" exact>
            <Privacy />
        </Route>
        <Route path="/Projects/:id">
            <ProjectDetail />
         </Route>
      </Switch>  
    </Router>
  </div>
  );
}

export default App;
