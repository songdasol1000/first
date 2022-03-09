import React, { useState } from 'react';
import Result from './Result';
const style= {width:'30px'}

function Calc({firstNum, secondNum, firstChange, secondChange}){
    return <div>
        <span>
            <input style={style} onChange={firstChange} value={firstNum}/>+
            <input style={style} onChange={secondChange} value={secondNum}/>=
            <Result result={parseInt(firstNum) + parseInt(secondNum)}/>
        </span>
    </div>
}

export default Calc;