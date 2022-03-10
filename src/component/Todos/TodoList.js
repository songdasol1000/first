import React, { useCallback } from 'react';
import { List } from 'react-virtualized';
import TodoItem from './TodoItem';
import styled from 'styled-components';


const TodoListDiv = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow: auto;
`;

function TodoList({ todos, handleRemove, handleToggle, handleModify }) {
    const rowRenderer = useCallback(
        ({index, key, style}) => {
    const todo = todos[index];
        return (
        <TodoItem 
            todo={todo} 
            key={todo._id} 
            handleRemove={handleRemove}
          //  handleUpdate={handleUpdate} 
            handleToggle={handleToggle}
            handleModify={handleModify}
            style={style}
            />
            ) 
    },[todos, handleRemove, handleToggle]
    );
    
    return (
        <List 
        width={512} 
        height={513} 
        rowCount={todos.length} 
        rowHeight={57} 
        rowRenderer={rowRenderer} 
        list={todos} 
        style={{ outline : 'none' }}
        />
    );
}

export default React.memo(TodoList);