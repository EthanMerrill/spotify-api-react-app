import React, { useEffect, useState } from 'react';
import SpotifyData from './SpotifyData';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

const Home = (props) => {
    const hash = window.location.hash
    const access_token = hash.substring(14, hash.indexOf('&token_type'))
    const [token, setToken] = useState(null)

    const [playlists, setPlaylists] = useState('no Playlists Found')
    const [songlist, setSonglist] = useState(null)
    useEffect(() => {
        setToken(access_token);
    }, [access_token]);
    //make some calls on the home component


    useEffect(() => {
        const headers = {
            'Authorization': 'Bearer ' + token
        }
        axios.get(`https://api.spotify.com/v1/me/playlists?limit=50`, { headers: headers })
            .then((response) => {
                setPlaylists(response)
            }, (error) => {
                console.log(error);
            })
    }, [token]);


    //re-map the playlists to a list in the format the autocomplete can handle. 
    let tempPlaylists = []

    playlists?.data?.items?.map(elm => {
        tempPlaylists.push({label: elm.name, data: elm})
        
    })
    console.log(tempPlaylists)

    return (
        <div>
            <Autocomplete
                disablePortal
                id="combo-box"
                options={tempPlaylists}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Playlist" />}
            />
        </div>
    )

}
export default Home