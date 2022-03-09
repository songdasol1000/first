import React, { useState } from 'react';
import PlayController from './PlayController';
import StatusBar from './StatusBar';
import VolumeController from './VolumeController';
import Jacket from './Jacket';
import MusicName from './MusicName';
import ArtistAlbum from './ArtistAlbum';

function MusicTemplate() {
    const [play, setPlay] = useState(false);
    const handleClick =() => {
        setPlay(!play);
    }
    return ( 
    <div>
        <Jacket play={play}/>
        <MusicName play={play}/>
        <ArtistAlbum play={play}/>
        <StatusBar play={play}/>
        <PlayController handleClick={handleClick} play={play}/>
        <VolumeController play={play}/>
    </div>
    );
}

export default MusicTemplate;