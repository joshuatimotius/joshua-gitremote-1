import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './component/Nav'
import Home from './component/Home'

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path='/' component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
