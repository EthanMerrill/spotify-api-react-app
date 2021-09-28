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

    const [playlists, setPlaylists] = useState('no Playlists Found')
    const [selectedPlaylist, setSelectedPlaylist] = useState(null)
    const [songlist, setSonglist] = useState(null)
    const [songsDetails, setSongsDetails] = useState(null)
    const [trackAttribute, setTrackAttribute] = React.useState('web');
    
    useEffect(() => {
        setToken(access_token);
    }, [access_token]);
    //make some calls on the home component


    // useEffect(() => {
    //     const headers = {
    //         'Authorization': 'Bearer ' + token
    //     }
    //     axios.get(`https://api.spotify.com/v1/me/playlists?limit=50`, { headers: headers })
    //         .then((response) => {
    //             setPlaylists(response)
    //         }, (error) => {
    //             console.log(error);
    //         })
    // }, [token]);

    // useEffect(()=> {
    //     const headers = {
    //         'Authorization': 'Bearer ' + token
    //     }
    //     axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylist?.id}/tracks`, { headers: headers })
    //         .then((response) => {
    //             setSonglist(response)
    //         }, (error) => {
    //             console.log(error);
    //         })
    //     // console.log(songlist.data.items)
    // },[selectedPlaylist, token])


    // //re-map the playlists to a list in the format the autocomplete can handle. 
    // let tempPlaylists = []

    // tempPlaylists = playlists?.data?.items?.map(elm => {
    //     return {label: elm.name, data: elm}
        
    // })

    return (
        <div>
            <SpotifySelectors access_token={access_token} setSongsDetails = {setSongsDetails} songsDetails = {songsDetails} trackAttribute = {trackAttribute} setTrackAttribute = {setTrackAttribute}/>
         
            <hr/>

            <div className='song-chart-frame'>
                
                <D3Chart data={songsDetails} trackAttribute = {trackAttribute}></D3Chart>
            </div>

            {/* <SpotifyData data = {token}/> */}
        </div>
    ) 

}
export default Home