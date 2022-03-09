import React from 'react';

function MapTest() {
    const names = [{id:0, text:"맑음"}];
    
    const nameList = names.map((e)=><li key={e.id}>{e.text}</li>);


    return <ul>{nameList}</ul>
}

export default MapTest;