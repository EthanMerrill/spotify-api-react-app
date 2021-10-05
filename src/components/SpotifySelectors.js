import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const SpotifySelectors = (props) => {
    //destructure
    const {access_token} = props

    const {setSongsDetails} = props

    const {setTrackAttribute} = props
    const {trackAttribute} = props

    //state vars
    const [playlists, setPlaylists] = useState('No Playlists Found')
    const [selectedPlaylist, setSelectedPlaylist] = useState(null)
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
                setPlaylists(response?.data?.items?.map(elm => {
                    return { label: elm.name, data: elm }
                }))
            }, (error) => {
                console.log(error);
            })
    }, [access_token]);

        // get songs in the playlists
    useEffect(() => {
        // Cleaner way of doing this??
        if(typeof(selectedPlaylist) !== 'undefined'){   
            const headers = {
                'Authorization': 'Bearer ' + access_token
            }
            axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylist?.id}/tracks`, { headers: headers })
                .then((response) => {
                    setSonglist(response)
                    songlist?.items?.map(elm => {
                        return elm
                    })
                }, (error) => {
                    console.log('this error', selectedPlaylist, error);
                })
        } else {
            console.log('no playlist selected')
            setSongsDetails(null)
            setSonglist(null)
        }
    }, [selectedPlaylist, access_token, songlist?.items, setSongsDetails])

        // get the details of each song in the songlist
    useEffect(() => {
        if (songlist && typeof (selectedPlaylist) !== 'undefined'){
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
        } else {
            setSongsDetails(null)
        }
    }, [selectedPlaylist, access_token, songlist, setSongsDetails])


    const handleChange = (event, newAlignment) => {
        setTrackAttribute(newAlignment);
    };


    //jsx return
    return (<>
        <div className='inputs-flex'>
        <ToggleButtonGroup
            color="primary"
            value={trackAttribute}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton color='secondary' value="danceability">danceability</ToggleButton>
            <ToggleButton value="energy">energy</ToggleButton>
            <ToggleButton value="key">key</ToggleButton>
            {/* <ToggleButton value="loudness">loudness</ToggleButton> */}
            <ToggleButton value="speechiness">speechiness</ToggleButton>
            <ToggleButton value="tempo">tempo</ToggleButton>
        </ToggleButtonGroup>

        <Autocomplete
            disablePortal
            id="combo-box"
            options={playlists}
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
