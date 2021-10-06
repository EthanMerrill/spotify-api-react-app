
import React, { useEffect } from 'react';

const Redirect = (props) => {
    const clientId = process.env.REACT_APP_CLIENT_KEY;
    const baseURI = window.location.href
    const redirect_uri = `${baseURI}home`;
    useEffect(() => {
        
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirect_uri}&response_type=token&state=123`;
    }, [clientId, redirect_uri]);

    return (
        <div>
        </div>
    );
}

export default Redirect;