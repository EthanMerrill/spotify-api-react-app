import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Redirect from './components/Redirect'
import {BrowserRouter as Router,
  Switch,
  Route} from 'react-router-dom'
// https://levelup.gitconnected.com/how-to-build-a-spotify-player-with-react-in-15-minutes-7e01991bc4b6

const App = (props) => {

  return (

    <div className="App">
      
      <header className="App-header">

          <h2>Jam Sort</h2>
        
      </header>
      <body>
      <Router>
        <Switch>
            <Route path= "/spotify-api-react-app/" exact component={Redirect}/>
            <Route path="/spotify-api-react-app/index" exact component = {Home}/>
        </Switch>
      </Router>
      </body>
    </div>
  );
}

export default App;
