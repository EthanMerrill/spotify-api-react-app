import React, { useEffect, useState } from 'react';
import SpotifyData from '../components/SpotifyData';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import D3Chart from '../components/D3Chart'
import SpotifySelectors from '../components/SpotifySelectors';


const Home = (props) => {
    const hash = window.location.hash
    const access_token = hash.substring(14, hash.indexOf('&token_type'))
    const [token, setToken] = useState(null)


    const [songsDetails, setSongsDetails] = useState(null)
    const [trackAttribute, setTrackAttribute] = React.useState('web');
    
    useEffect(() => {
        setToken(access_token);
    }, [access_token]);


    return (
        <div>
            <SpotifySelectors access_token={access_token} setSongsDetails = {setSongsDetails} songsDetails = {songsDetails} trackAttribute = {trackAttribute} setTrackAttribute = {setTrackAttribute}/>
         
            <hr/>

            <div className='song-chart-frame'>
                
                <D3Chart data={songsDetails} trackAttribute = {trackAttribute}></D3Chart>
            </div>

        </div>
    ) 

}
export default Home