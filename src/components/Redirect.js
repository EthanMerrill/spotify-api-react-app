
import React, { useEffect } from 'react';

const Redirect = (props) => {
    const clientId = process.env.REACT_APP_CLIENT_KEY;
    let redirect_uri = String(window.location.href)

    if (redirect_uri[redirect_uri.length-1]==="/") {
        redirect_uri = `${window.location.href}index`;
    }else{
        redirect_uri = `${window.location.href}/index`;
    }
    
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