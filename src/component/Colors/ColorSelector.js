import React, { useContext } from 'react';
import ColorContext, { ColorConsumer } from '../../contexts/color';

const colors = ["red", "orange","yellow", "green", "blue", "indigo", "violet"];

function ColorSelector() {
    const { action } = useContext(ColorContext);

    return (
    <div>
        <div>Choose Color: </div>
        <div style={{display: "flex"}}>
    {colors.map((color) => (
    <div 
    key={color} 
    style={{
        background : color, 
        width:"24px", 
        height:"24px", 
        cursor:"pointer",
        }} 
        onClick = {()=> action.setColor(color)}
        />
        ))}
        </div>
        
    </div>
    );
}

export default ColorSelector;