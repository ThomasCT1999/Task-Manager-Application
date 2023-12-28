// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './LandingPage';
import Login from './Login';

const App = () => {
  return (
    <Router>
      {/* Use Switch to wrap your Route components */}
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;