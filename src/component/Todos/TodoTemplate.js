import React from 'react';
import styled from 'styled-components';


const TdT = styled.div`
    width: 512px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6rem;
    border-radius: 4px;
    overflow: hidden;

    .title{
        background-color: coral;
        color: white;
        height: 4rem;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content{

    }
`;


function TodoTemplate({children}) {
    return <TdT>
        <div className='title'>Todo List</div>
        <div className='content'>{children}</div>
    </TdT>
}

export default TodoTemplate;