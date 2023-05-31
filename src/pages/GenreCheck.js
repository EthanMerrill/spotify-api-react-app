/* eslint-disable */
import React, { useEffect, useState } from "react";
import SpotifyData from "../components/SpotifyData";


const GenreCheck = (props) => {
    const hash = window.location.hash
    const access_token = hash.substring(14, hash.indexOf('&token_type'))
    // destructure props
    // const {propName} = props

    // State Variables
    // const [variableName, setVariableName] = useState(null)

    //Use Effects
        //useEffect desc
    useEffect(()=> {
        
    },[])
    // JSX return
    return(
        <>
            <SpotifyData access_token={access_token}/>
        </>
    )
}

export default GenreCheck