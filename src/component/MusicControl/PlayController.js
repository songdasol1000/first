import React from 'react';
import {BsPlayFill, BsFillPauseFill} from 'react-icons/bs';

function PlayController({play, handleClick}) {
    return <div>
        <button onClick={handleClick}>{play ? <BsFillPauseFill/> : <BsPlayFill/>}</button>
    </div>
}

export default PlayController;