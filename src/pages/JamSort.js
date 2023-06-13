import React, { useState } from 'react';
import D3Chart from '../components/D3Chart'
import SpotifySelectors from '../components/SpotifySelectors';
import PlaylistInterface from '../components/PlaylistInterface';
import SpotifyData from '../components/SpotifyData';
import { Link } from 'react-router-dom';

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

    if (access_token.length === 0) {
        return (
            <div>
                <h1 className='subtitle'>Spotify API React App</h1>
                <p className='informational-text'>This app lets you sort your playlists by energy, dancability and more. Authenticate with Spotify to get started!</p>
<div className='auth-block'>
                <div className='sp-button sp-flat sp-light'>
                <Link className='auth-text' to='/spotify-api-react-app/'>Authenticate with Spotify</Link>
                </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <SpotifyData access_token={access_token} />
                <SpotifySelectors className="card" access_token={access_token} setSongsDetails={setSongsDetails} trackAttribute={trackAttribute} setTrackAttribute={setTrackAttribute} setSelectedPlaylist={setSelectedPlaylist} selectedPlaylist={selectedPlaylist} />

                <hr />
                <div className='song-chart-frame'>
                    <PlaylistInterface playlist={selectedPlaylist} access_token={access_token} songIdOrder={songIdOrder} />
                    <D3Chart data={songsDetails} trackAttribute={trackAttribute} setSongIdOrder={setSongIdOrder}>

                    </D3Chart>
                </div>

            </div>

        )

    }
}
export default JamSort