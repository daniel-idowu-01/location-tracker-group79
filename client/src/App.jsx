import React from 'react';
import SignInForm from './components/register/Login';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/register/Register';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={SignInForm} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
