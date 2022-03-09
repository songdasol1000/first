import React, { useState } from 'react';

function Counter({ number, increase, decrease, reset }) {
    return (
    <div style={{ display: "flex" }}>
        <button onClick={decrease}> - </button>
        <div> {number} </div>
        <button onClick={increase}> + </button>
        <button onClick={reset}> 초기화 </button>
    </div>
    )
}

export default Counter;