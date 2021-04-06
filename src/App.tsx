import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import TopNav from './TopNav';
import Home from './Home';
import Recipes from './Recipes';
import './App.css';

// Pages with custom navbar backgrounds
const customNav = ['recipes'];

function App() {
  const navClass = () => {
    const loc = window.location.pathname.replace('/', '');
    return customNav.includes(loc) ? `nav-${loc}` : 'nav-default';
  };

  return (
    <div>
      <Router>
        <TopNav navClass={navClass()}/>
        <div>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/recipes"><Recipes /></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
