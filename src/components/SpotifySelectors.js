import React, { useEffect, useState } from 'react';
import SpotifyData from './SpotifyData';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const SpotifySelectors = (props) => {
    //destructure
    const {access_token} = props

    //state vars
    const [playlists, setPlaylists] = useState('no Playlists Found')
    const [selectedPlaylist, setSelectedPlaylist] = useState([])
    const [songsDetails, setSongsDetails] = useState(null)
    const [alignment, setAlignment] = React.useState('web');
    const [songlist, setSonglist] = useState(null)
    //const vars

    //use effects
        //Get Spotify Playlists
    useEffect(() => {
        
        const headers = {
            'Authorization': 'Bearer ' + access_token
        }
        axios.get(`https://api.spotify.com/v1/me/playlists?limit=50`, { headers: headers })
            .then((response) => {
                setPlaylists(response)
            }, (error) => {
                console.log(error);
            })
    }, [access_token]);

        // get songs in the playlists
    useEffect(() => {
        if(selectedPlaylist){            
            const headers = {
                'Authorization': 'Bearer ' + access_token
            }
            axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylist?.id}/tracks`, { headers: headers })
                .then((response) => {
                    setSonglist(response)
                    songlist?.items?.map(elm => {
                        console.log(elm)
                        return elm
                    })
                }, (error) => {
                    console.log(error);
                })
        }
        // console.log(songlist.data.items)
    }, [selectedPlaylist, access_token, songlist])

        // get the details of each song in the songlist
    useEffect(() => {
        if (songlist){
            let promises = songlist?.data?.items?.map(track => {
                const headers = {
                    'Authorization': 'Bearer ' + access_token
                }
                return axios.get(`https://api.spotify.com/v1/audio-features/${track.track.id}`, { headers: headers })
                    .then((response) => {
                        // console.log(track.track.name, track.track.popularity, track.track.id, response)
                        let resp = (response?.data)
                        resp['name'] = (track.track.name)
                        resp['popularity'] = (track.track.popularity)

                        return(resp)
                    }, (error) => {
                        console.log(error)
                        return(error)
                    })
                    
            })
            Promise.all(promises).then(results => {
                setSongsDetails(results)
            })
        }
    }, [selectedPlaylist, access_token])

    //re-map the playlists to a list in the format the autocomplete can handle. 

    let tempPlaylists = []
    tempPlaylists = playlists?.data?.items?.map(elm => {
        return { label: elm.name, data: elm }

    })


    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };


    //jsx return
    return (<>
        <div className='inputs-flex'>
        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton value="danceability">danceability</ToggleButton>
            <ToggleButton value="energy">energy</ToggleButton>
            <ToggleButton value="key">key</ToggleButton>
            <ToggleButton value="loudness">loudness</ToggleButton>
            <ToggleButton value="speechiness">speechiness</ToggleButton>
            <ToggleButton value="tempo">tempo</ToggleButton>
        </ToggleButtonGroup>

        <Autocomplete
            disablePortal
            id="combo-box"
            options={tempPlaylists}
            sx={{ width: 300 }}
            onChange={(event, value) => setSelectedPlaylist(value?.data)}
            isOptionEqualToValue={(option, value) => option.id === value.id}
            renderInput={(params) => <TextField {...params} label="Playlist" />}
        />
        </div>
    </>
    )
}

export default SpotifySelectors
