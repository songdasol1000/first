import React from 'react';

function MusicName({play}) {
    if(play){
        return <div>재생중인 곡 제목</div>
    } else {
        return <div>unknown</div>
    }
}

export default MusicName;