import React, { useContext } from 'react';
import ColorContext, { colorConsumer } from '../../contexts/color';

function ColorBox() {
    const {state, action} = useContext(ColorContext);

        return (
            <div 
            style={
                { width:"64px", 
                height:"64px", 
                background: state.color,
                 }}
                 ></div>
                 )
    }
        


export default ColorBox;