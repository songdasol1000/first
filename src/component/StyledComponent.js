import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
    background : ${props => props.color || 'lightgray'};
    padding : 1rem;
    display: flex;
`;

const Button = styled.button`
    background: white;
    color: black;
    border-radius: 4px;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    font-size: large;
    font-weight: 600;

    &.hover{
        background: lightcoral;
    }
`;

function StyledComponent() {
    return (
    <Box color="black">
        <Button>안녕하세요</Button>
        <Button>안녕히계세요</Button>
    </Box>
    );
}

export default StyledComponent;