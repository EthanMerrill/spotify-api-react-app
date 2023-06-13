import React from "react";
import "./App.css";
import JamSort from "./pages/JamSort";
import GenreCheck from "./pages/GenreCheck";
import Redirect from './components/Redirect'
import {BrowserRouter as Router,
  Switch,
  Route, 
Link} from 'react-router-dom'
// https://levelup.gitconnected.com/how-to-build-a-spotify-player-with-react-in-15-minutes-7e01991bc4b6

const App = (props) => {

  return (

    <div className="App">
      
      <header className="App-header">

          <h2>JamSort</h2>
      </header>
      <div className='body'>
      
      <Router>
        <Switch>
            <Route path= "/spotify-api-react-app/" exact component={Redirect}/>
            <Route path= "/spotify-api-react-app/index" exact component={JamSort}/>
            <Route path="/spotify-api-react-app/jamsort" exact component = {JamSort}/>
            <Route path="/spotify-api-react-app/genrecheck" exact component = {GenreCheck}/>
        </Switch>
          <Link to="/spotify-api-react-app/jamsort">Jamsort</Link> |{" "}
          <Link to="/spotify-api-react-app/genrecheck">Genrecheck</Link> |{" "}
      </Router>
      </div>
    </div>
  );
}

export default App;
