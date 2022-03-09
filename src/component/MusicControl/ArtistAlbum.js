import React from 'react';

function ArtistAlbum({play}) {
    if(play){
        return <div>잘 나가는 가수/잘 나가는 앨범</div>
    } else {
        return <div>unknown/unknown</div>
    }
}

export default ArtistAlbum;