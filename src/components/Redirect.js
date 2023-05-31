
import React, { useEffect } from 'react';

const Redirect = (props) => {
    const clientId = process.env.REACT_APP_CLIENT_ID;
    let redirect_uri = ''
    console.log(redirect_uri)
    if (String(window.location.href)[String(window.location.href).length-1]==="/") {
        redirect_uri = `${window.location.href}index`;
    }else{
        redirect_uri = `${window.location.href}/index`;
    }
    console.log(redirect_uri)

    const scopes = 'playlist-modify-private playlist-read-private playlist-modify-public'

    useEffect(() => {
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${redirect_uri}&response_type=token&state=123`;


    }, [clientId, redirect_uri]);

    return (
        <div>
        </div>
    );
}

export default Redirect;