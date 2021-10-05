import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Redirect from './components/Redirect'
import {BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom'
// https://levelup.gitconnected.com/how-to-build-a-spotify-player-with-react-in-15-minutes-7e01991bc4b6


// Replace with your app's client ID, redirect URI and desired scopes


const App = (props) => {

  return (

    <div className="App">
      <header className="App-header">
        Jam Sort 
      </header>
    <Router>
      <Switch>
        <Route path = "/" exact component={Redirect}/>
        <Route path ="/home" exact component = {Home}/>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
