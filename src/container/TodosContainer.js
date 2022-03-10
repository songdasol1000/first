import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoInput from "../component/Todos/TodoInput";
import TodoList from "../component/Todos/TodoList";
import TodoTemplate from "../component/Todos/TodoTemplate";
import { useActions } from "../lib/useActions";
import { changeInput, fetchAllTodos, insert, modify, remove, toggle, loadTODOS } from "../modules/todos";

function TodosContainer() {
    //state
    const { todos, input } = useSelector(({ todoList }) => ({
        todos: todoList.todos,  // 리스트의 todos를 빼와서 todos이름으로 저장
        input: todoList.input
    }));

    
    //action dispatch
    const dispatch = useDispatch();

    const [handleChangeInput,
        handleAdd,
        handleRemove,
        handleToggle,
        handleModify,
        handleLoadTodos,
    ] = useActions([changeInput, insert, remove, toggle, modify, loadTODOS],
        []);


    // const handleChangeInput = useCallback((input) => dispatch(changeInput(input)), [dispatch]);
    // const handleAdd = useCallback((text) => dispatch(insert(text)), [dispatch]);
    // const handleRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
    // const handleToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);

    useEffect(() => {
        // const savedTodos = localStorage.getItem('todos');
        // if (savedTodos) {
        //     handleLoadTodos(JSON.parse(savedTodos));
        
        // }
        dispatch(fetchAllTodos());
        return ()=>{
            //이 추드리스트 화면을 떠날 때, 지금 현재있는 상태를 req
        }
    }, [dispatch]);

    // useEffect(() => {
    //     localStorage.setItem('todos', JSON.stringify(todos));
    // }, [todos]);

    return (
        <TodoTemplate>
            <TodoInput
                input={input}
                handleAdd={handleAdd}
                handleChangeInput={handleChangeInput} />
            <TodoList
                todos={todos}
                handleRemove={handleRemove}
                handleToggle={handleToggle}
                handleModify={handleModify}
            />
        </TodoTemplate>
    );
}

export default TodosContainer;