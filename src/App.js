import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Bhavans from './components/Bhavans';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Nav />
      <div className="content-container">
        <Switch>
          <Route path="/about">
            <About />  
          </Route>
          <Route path="/bhavans">
            <Bhavans />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
