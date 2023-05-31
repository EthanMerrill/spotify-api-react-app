import React, { useEffect, useState } from 'react';
import axios from 'axios';


const SpotifyData = (props) => {
    const [apiData, setApiData] = useState(null)
    //destructure
    const { access_token } = props


    useEffect(() => {
        console.log("running useffect", access_token)
        const headers = {
            'Authorization': 'Bearer ' + access_token
            // , 'market': 'US'
        }
        // https://designcode.io/react-hooks-handbook-fetch-data-from-an-api
        if (access_token) {
            axios.get(`https://api.spotify.com/v1/me/player/currently-playing`, { headers: headers }).
                then((response) => {
                    if (response.status === 204) {
                        axios.get(`https://api.spotify.com/v1/me/player/recently-played?market=US`, { headers: headers })
                            .then((response) => {
                                console.log('RESPONSE', response.data)
                                setApiData(response.data)
                            }, (error) => {
                                console.log(error)
                            }
                            )
                    }
            })

        }
    }, [access_token])

    return (
        <div>
            <p>Spotify Data here</p>
            {access_token ? <div>{apiData}</div> : null}
        </div>
    )
}

export default SpotifyData