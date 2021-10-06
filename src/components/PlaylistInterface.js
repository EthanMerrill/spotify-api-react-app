import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { text } from 'd3-fetch';

const PlaylistInterface = (props) => {
    //deconstruct props
    const {playlist} = props
    const {access_token} = props
    const {songIdOrder} = props
   
    // state vars
    const [userData, setUserData] = useState(null)
    const [playlistTextbox, setPlaylistTextbox] = useState(null)

    // use effects
        // update the textbox


        // get the user id
    useEffect(()=>{
        const headers = {
            'Authorization': 'Bearer ' + access_token,
        }
        axios.get(`https://api.spotify.com/v1/me/`, { headers: headers })
            .then((response) => {
                console.log(response.data.id)
                setUserData(response)
            }, (error) => {
                console.log(error);
            })
    },[access_token])

    //other functions
        // save a new playlist
    let saveNew = (access_token, userData, playlistName, playlistSongs) => {
       
        const headers = {
            'Authorization': 'Bearer ' + access_token,
        }
        const data = {
            "name": playlistName,
            "description": "Playlist Sorted by X with Jamsort",
            "public": true
        }
        // axios.post(`https://api.spotify.com/v1/users/${userData.data.id}/playlists`, { headers: headers, body: data})
        axios({
            method: 'post',
            url: `https://api.spotify.com/v1/users/${userData.data.id}/playlists`,
            headers: headers,
            data: data
        })
            .then((response) => {
                const headers = {
                    'Authorization': 'Bearer ' + access_token,
                }

                axios({
                    method: 'post',
                    url: `https://api.spotify.com/v1/playlists/${response.data.id}/tracks`,
                    headers: headers,
                    data: {"uris": playlistSongs}
                })
            
        }, (error) => {
            console.log(error);
            })
        }

    let addToPlaylist = (access_token, userData, playlistId, playlistSongs)=>{
        const headers = {
            'Authorization': 'Bearer ' + access_token,
        }

        axios({
            method: 'put',
            url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
            headers: headers,
            data: { "uris": playlistSongs }
        }).then((response=>{
            console.log(response)
        }))
    }

        //handle textbox change event
    let textboxOnChange = (text) => {
        console.log(text)
        setPlaylistTextbox(text)
    }

    return(
        <div id='playlistInterface'>
            <input name = 'playlistName' value={playlistTextbox} type='text' onChange = {(e)=>textboxOnChange(e.target.value)}></input>
            <div className='sp-button sp-flat sp-light' onClick={() => saveNew(access_token, userData, playlistTextbox, songIdOrder)} >Save as new Playlist</div>
            <div className='sp-button sp-flat sp-light' onClick={() => addToPlaylist(access_token, userData, playlist.id, songIdOrder)}>Overwrite {playlist ? playlist.name : " "} Playlist</div>
        </div>
    )
}

export default PlaylistInterface