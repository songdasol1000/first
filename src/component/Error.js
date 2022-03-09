
import React from 'react';

const style = {color:'red', fontSize:'0.8rem',marginTop:'0.8rem'}
function Error({error}) {
    
    return <div style={style}>{error.msg}</div>
}

export default Error;



