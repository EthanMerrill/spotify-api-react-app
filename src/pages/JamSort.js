import React, {useState } from 'react';
import D3Chart from '../components/D3Chart'
import SpotifySelectors from '../components/SpotifySelectors';
import PlaylistInterface from '../components/PlaylistInterface';
import SpotifyData from '../components/SpotifyData';
import Redirect from '../components/Redirect';
import {BrowserRouter as Router,
    Switch,
    Route, 
  Link} from 'react-router-dom'

const JamSort = (props) => {
    const hash = window.location.hash
    const access_token = hash.substring(14, hash.indexOf('&token_type'))
    console.log('access token', access_token)
    const clientId = process.env.REACT_APP_CLIENT_ID;
    console.log('clientid', clientId)

    const [songsDetails, setSongsDetails] = useState(null)
    const [trackAttribute, setTrackAttribute] = React.useState('tempo');
    const [selectedPlaylist, setSelectedPlaylist] = useState(null)
    const [songIdOrder, setSongIdOrder] = useState(null)
    
    return (
        
        <div>
            {access_token.length === 0  && <Link to='/spotify-api-react-app/'>authenticate with Spotify</Link>}
            <SpotifyData access_token={access_token}/>
            <SpotifySelectors className = "card" access_token={access_token} setSongsDetails = {setSongsDetails} trackAttribute = {trackAttribute} setTrackAttribute = {setTrackAttribute} setSelectedPlaylist = {setSelectedPlaylist} selectedPlaylist = {selectedPlaylist}/>
         
            <hr/>
            <div className='song-chart-frame'>
                <PlaylistInterface playlist={selectedPlaylist} access_token={access_token} songIdOrder={songIdOrder} />
                <D3Chart data={songsDetails} trackAttribute = {trackAttribute} setSongIdOrder = {setSongIdOrder}>
                   
                </D3Chart>
            </div>

        </div>
        
    ) 

}
export default JamSort