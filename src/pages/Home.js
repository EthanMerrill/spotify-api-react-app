import React, {useState } from 'react';
import D3Chart from '../components/D3Chart'
import SpotifySelectors from '../components/SpotifySelectors';



const Home = (props) => {
    const hash = window.location.hash
    const access_token = hash.substring(14, hash.indexOf('&token_type'))


    const [songsDetails, setSongsDetails] = useState(null)
    const [trackAttribute, setTrackAttribute] = React.useState('tempo');



    return (
        
        <div>
            <SpotifySelectors className = "card" access_token={access_token} setSongsDetails = {setSongsDetails} trackAttribute = {trackAttribute} setTrackAttribute = {setTrackAttribute}/>
         
            <hr/>
            <div className='song-chart-frame'>
                
                <D3Chart data={songsDetails} trackAttribute = {trackAttribute}></D3Chart>
            </div>

        </div>
        
    ) 

}
export default Home