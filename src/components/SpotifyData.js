import React, { useEffect, useState } from 'react';
import axios from 'axios';


const SpotifyData = (props) => {
    
    const [apiData, setApiData] = useState('null')

    useEffect(() => {
        console.log(props.token)
        const headers = {"Authorizaton": "Bearer " + String(props.token)}
        // https://designcode.io/react-hooks-handbook-fetch-data-from-an-api
        if(props.token){
            axios.get(`https://api.spotify.com/v1/browse/new-releases`,{headers:headers})
            .then((response) => {
                console.log('RESPONSE', response)
                setApiData(response)
            }, (error) => {
                console.log(error)
            })
        }
    }, [props.token])

        return (
            <div>
                <p>Spotify Data here</p>
                <div>{apiData}</div>
            </div>
        )
}

export default SpotifyData