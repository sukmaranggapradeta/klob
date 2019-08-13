import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar'
// import Card from './components/Card'
// import DataHome from '../src/asset/index.json'
import { BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import Home from './layouts/Home'
import Profile from './components/Profile'
import profiledetail from './layouts/ProfileDetail'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/profile/:profilename" component={ Profile } />
          <Route exact path="/profile/detail/:profiledetail" component={ profiledetail } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
