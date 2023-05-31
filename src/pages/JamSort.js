import React, {useState } from 'react';
import D3Chart from '../components/D3Chart'
import SpotifySelectors from '../components/SpotifySelectors';
import PlaylistInterface from '../components/PlaylistInterface';
import SpotifyData from '../components/SpotifyData';

const JamSort = (props) => {
    const hash = window.location.hash
    const access_token = hash.substring(14, hash.indexOf('&token_type'))


    const [songsDetails, setSongsDetails] = useState(null)
    const [trackAttribute, setTrackAttribute] = React.useState('tempo');
    const [selectedPlaylist, setSelectedPlaylist] = useState(null)
    const [songIdOrder, setSongIdOrder] = useState(null)
    
    return (
        
        <div>
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