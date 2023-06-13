
import React, { useEffect } from 'react';

const Redirect = (props) => {
    
    const clientId = process.env.REACT_APP_CLIENT_ID;
    console.log('clientid', clientId)
    let redirect_uri = ''
    if (String(window.location.href)[String(window.location.href).length-1]==="/") {
        redirect_uri = `${window.location.href}index`;
        
    }else{
        // redirect_uri = `${window.location.href}/jamsort`;
        redirect_uri = 'http://localhost:3000/spotify-api-react-app/jamsort'
    }
    console.log(redirect_uri)

    
    const scopes = 'playlist-modify-private playlist-read-private playlist-modify-public user-read-currently-playing user-read-recently-played'
    useEffect(() => {
        window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&scope=${encodeURIComponent(scopes)}&redirect_uri=${redirect_uri}&response_type=token&state=123`;


    }, [clientId, redirect_uri]);

    return (
        <div>
        </div>
    );
}

export default Redirect;

// https://accounts.spotify.com/authorize?client_id=cbb4da0e74d849cf94ec037fdf03ff26&scope=playlist-modify-private%20playlist-read-private%20playlist-modify-public%20user-read-currently-playing%20user-read-recently-played&redirect_uri=http://localhost:3000/spotify-api-react-app/index#access_token=BQATn5hbdbdwzblQigfBVrs83VKSlCvu4tWncm0IydFch-mWrq_aNSIBa5J1Ihb095zYstwVf-BJj9zbO_wvCnwtGCimyw4xT4Mw8qs1P0EL4CzZ1ccfC7SeQOl2M50FuK8m1y00imZOtCfvYFhHBmmGf5hbFXayXCKBxZq5vITEokd5gv5FZYh05xuBpifrllzX1Mbf6xoJSfjgJL-qt-NveYDyBvFncka85Bz3RUlCxZMDmygS2TL9&token_type=Bearer&expires_in=3600/index?&response_type=tokenn
// https://accounts.spotify.com/authorize?client_id=cbb4da0e74d849cf94ec037fdf03ff26&scope=playlist-modify-private%20playlist-read-private%20playlist-modify-public%20user-read-currently-playing%20user-read-recently-played&redirect_uri=http://localhost:3000/spotify-api-react-app/index?code=AQD4onIMxHeevOxZnxNdyr0TquJtC-rj45Y6Bz8m61aAV_PkSqFdsDQmO3RylHaEzPsLF49nEl6Ax0FTtmorMuMqXF7_Itpu09JYfjHYmLvkI15thJ8IvNfZjQ39DvxJDM0LDLajaINo-aaxjDYy3G7F31pQZJr_Axs6qiEeP6B1yUee48ByGs7F2jjigrJbdsBxgXbNacIif5KCBSX6RB4kz9z6oQxzqY4OYpHz1wad0WGraqgn1V2ZQvos7AAagvMl7pkZLzbAbAz5djAxJnlKo3vluia7U_y51U3xKPPpubdVRkDoEcpiH1PeTugmxgAW1hd50OTinjIBBoJe7vNuLznAq8_pnx6WG90PehSUbfmFrw&state=123/index&response_type=code&state=123 http://localhost:3000/spotify-api-react-app/index