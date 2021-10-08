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
    
    const {setSelectedPlaylist} = props
    const {selectedPlaylist} = props
    //state vars
    const [playlists, setPlaylists] = useState(['No Playlists Found'])
    // const [selectedPlaylist, setSelectedPlaylist] = useState(null)
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

        //Function to get all song information and details, up to 50 tracks at a time:
        const get50SongsDetails = (songlist) => {
            const headers = {
                'Authorization': 'Bearer ' + access_token
            }
            let trackids = songlist?.data?.items?.map(track => {
                return (track.track.id)
            })
            let promises = axios({
                method: 'GET',
                url: `https://api.spotify.com/v1/audio-features/?ids=${String(trackids)}`,
                headers: headers
            }).then((response) => {

                // console.log(response.data.audio_features)
                // console.log(songlist.data.items)
                let res = songlist.data.items.map(track => {
                    return Object.assign(track, response.data.audio_features.find(elm => elm?.id === track?.track?.id))
                })
                return (res)
            }, (error) => {
                console.log(error)
                alert(error)
                return (error)
            })

            Promise.resolve(promises).then(results => {
                setSongsDetails(results)
            })
        }


        if (songlist && typeof (selectedPlaylist) !== 'undefined'){
            // let fullSongsDetails = []
            // console.log(songlist?.data?.items.length)
            // for(let i=0; i<songlist?.data?.items.length;i=i+50){
            //     fullSongsDetails.push(...songlist?.data?.items?.slice(i, i + 50))
            // }
            // console.log(fullSongsDetails)
           setSongsDetails(get50SongsDetails(songlist))
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
            <div className="autocomplete-container">
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
        <div className='mini-box'>
        <h3> Sort Metric</h3>
        <ToggleButtonGroup
            color="primary"
            value={trackAttribute}
            exclusive
            onChange={handleChange}
        >
            <ToggleButton value="danceability">danceability</ToggleButton>
            <ToggleButton value="energy">energy</ToggleButton>
            <ToggleButton value="key">key</ToggleButton>
            {/* <ToggleButton value="loudness">loudness</ToggleButton> */}
            <ToggleButton value="speechiness">speechiness</ToggleButton>
            <ToggleButton value="tempo">tempo</ToggleButton>
        </ToggleButtonGroup>
            </div>

        </div>
    </>
    )
}

export default SpotifySelectors
