import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'

class App extends Component{
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route patch='/' exact component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;