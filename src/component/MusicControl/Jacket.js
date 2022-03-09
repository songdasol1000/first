import React from 'react';

function Jacket({play}) {
    if (play) {
        return <div><img src='/logo512.png' alt='' width={200} height={200}/></div> 
    } else {
        return <div><img src='/black.jpeg' alt='' width={200} height={200}/></div>
    }
}

export default Jacket;