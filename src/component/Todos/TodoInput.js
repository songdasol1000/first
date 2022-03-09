import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const TodoForm = styled.form`
    display: flex;
    background: #495057;

    input{
        background: none;
        outline: none;
        border: none;

        padding: 0.5px;
        font-size: 1.125rem;
        line-height: 1.5;
        color: white;

        &::placeholder{
            color: #dee1ef;
        }

        flex:1;
    }

    button{
        background: none;
        outline: none;
        border: none;

        background-color: #868e96;
        color: white;
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 1.5rem;
        display: flex;
        align-items: center;

        cursor: pointer;
        &:hover{
            background: #dee1ef;
        }
        transition: 0.1s background ease-in-out;
    }
`;

function TodoInput({ input, handleAdd, handleChangeInput }) {
    //const [input, setInput] = useState('');

    return ( 
    <TodoForm 
        onSubmit={(e)=>{
        e.preventDefault();
        handleAdd(input);
        handleChangeInput("");
        //nextId.current += 1;
    }}
    >
        <input 
            placeholder='input your todo' 
            value={input} 
            onChange={(e)=>handleChangeInput(e.target.value)}
        />
        <button type='submit'> + </button>
    </TodoForm>
    );
}

export default TodoInput;