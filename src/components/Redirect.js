
import React, { useEffect } from 'react';

const Redirect = (props) => {
    const clientId = process.env.REACT_APP_CLIENT_KEY;
    const redirect_uri = `${window.location.href}/index`;
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