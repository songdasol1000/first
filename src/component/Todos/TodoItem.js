import React from 'react';
import { useState } from 'react';
import {MdOutlineRadioButtonChecked, MdOutlineRadioButtonUnchecked, MdRemoveCircleOutline, MdUpgrade} from 'react-icons/md'
import styled from 'styled-components';

const TodoItemVirtualized = styled.div`

`;

const TodoItemWrap = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;

    &:nth-child(even){
        background: coral;
    }

    .checkbox{
        cursor: pointer;
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        
    }


    .text{
        margin-left: 0.5rem;
        flex: 1;
        text-decoration: ${(props) => props.checked && 'line-through'};
    }

    .upgradeBtn{
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        color: red;
        cursor: pointer;
        &:hover {
            color: pink;
        }
    }

    .removeBtn{
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        color: red;
        cursor: pointer;
        &:hover {
            color: pink;
        }
    }

    & + & {
        border-top: 1px solid white;
    }
`;

const TodoItem = ({ 
    todo, 
    handleRemove, 
    handleModify, 
    handleToggle,
    style,
 }) => {
const {_id, text, checked} = todo;
//const [input, setInput] = useState(false);
//console.log(_id, text, checked);

    return (
        <TodoItemVirtualized style={style}>
    <TodoItemWrap checked={checked}>
        <div className="checkbox" onClick={() => handleToggle({_id, checked})}> 
        {checked ? (
            <MdOutlineRadioButtonChecked />
         ) : (
            <MdOutlineRadioButtonUnchecked />
         )} 
        </div>
        <input 
            className='text'
            value={text}
            //기존에 있는 핸들코디파이를 
            //제출할 때 
            onChange={(e) => { 
                const text = e.target.value;
                handleModify({_id, text})}
            }
            readOnly={checked}
        />
        <div className="removeBtn" onClick={()=> handleRemove(_id)}> 
            <MdRemoveCircleOutline/> 
        </div>
    </TodoItemWrap>
    </TodoItemVirtualized>
    );
};
    
export default React.memo(TodoItem);