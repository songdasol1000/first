import { createAction, handleActions } from "redux-actions";
import createRequestThunk, { createActionType } from "../lib/createRequestThunk";
import * as todoApi from '../lib/apis/todos';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';
const MODIFY = 'todos/MODIFY';
const LOAD_TODOS = 'todos/LOAD_TODOS';

const [FETCH_ALL, FETCH_ALL_SUCCESS] = 
createActionType('todos/FETCH_ALL');
//const FETCH_ALL = 'todos/FETCH_ALL';
//const FETCH_ALL_SUCCESS = 'todos/FETCH_ALL_SUCCESS';

//const INSERT_TODO = 'todos/INSERT_TODO';
//const INSERT_TODO_SUCCESS = 'todos/INSERT_TODO_SUCCESS';
const [INSERT_TODO, INSERT_TODO_SUCCESS] = 
createActionType('todos/INSERT_TODO');
const [UPDATE_TODO, UPDATE_TODO_SUCCESS] = 
createActionType('todos/UPDATE_TODO');
const [DELETE_TODO, DELETE_TODO_SUCCESS] = 
createActionType('todos/DELETE_TODO');

const [TOGGLE_TODO, TOGGLE_TODO_SUCCESS] = 
createActionType('todos/TOGGLE_TODO');


export const changeInput = createAction(CHANGE_INPUT, input => input); // input을 받을거고 그걸 리덕스에게 넘겨줌 얘 setInput임
export const insert = createRequestThunk(INSERT_TODO, todoApi.insertTodo);

//createAction(INSERT, (text) => ({
//     id: Date.now(),
//     text,
//     checked: false,
//     //publishedDate: moment().format("YYYY-MM-DD HH:MM")
// }));
export const toggle = createRequestThunk(TOGGLE_TODO, todoApi.updateTodo);
//createAction(TOGGLE, (id) => id);

export const remove = createRequestThunk(DELETE_TODO, todoApi.deleteTodo);
//createAction(REMOVE, (id) => id);

export const modify = createAction(MODIFY, (id, text) => ({ id, text }));

export const loadTODOS = createAction(LOAD_TODOS, (todos) => todos);

export const fetchAllTodos = createRequestThunk(FETCH_ALL, todoApi.fetchAll);

const init = {
    todos: [],
    input: ""
};

//매개변수 받을 수 있음 input=>input
// dispatch할 때 changeInput(매개변수) 매개변수를 Reducer에게 건네주겠다

// state : todos
// 이 todos를 setTodo할 거다 -> Reducer는 state에 변화를 주는 아이
//액션 생성함수가 하는 일은 dospatch 할 때 불렀던 매개변수를 reducer에게줌
// reducer는 그것을 받아서 state에 변화를 주는 용도


const todoList = handleActions({ //action 비구조           //input : input
    [FETCH_ALL_SUCCESS]: (state, { payload: todos }) => ({
        ...state, 
        todos 
    }),
     [INSERT_TODO_SUCCESS]: (state, action) => ({
         ...state, 
         todos:action.payload,
     }),
     [UPDATE_TODO_SUCCESS]: (state, action) => ({
        ...state, 
        todos:action.payload,
    }),
    [DELETE_TODO_SUCCESS]: (state, action) => ({
        ...state, 
        todos:action.payload,
    }),
    [TOGGLE_TODO_SUCCESS]: (state, action) => ({
        ...state, 
        todos:action.payload,
    }),
    [CHANGE_INPUT]: (state, { payload: input }) => ({ 
        ...state, input 
    }), //받은 매개변수는 action 안에 있음(payload : 화물)
    // [INSERT]: (state, { payload: todo }) => ({
    //     ...state,
    //     todos: state.todos.concat(todo) // 기존에 있던 값을 기억해야함 따라서 state.todos.concat
    // }),
    [TOGGLE]: (state, { payload }) => ({ // 원래는 페이로드를 받는데 그 페이로드가 뭔지 지정해주면 { payload : id} 이렇게하면 아래 id로 쓰면 됨
        ...state,
        todos: state.todos.map((todo) => todo.id === payload ? { ...todo, checked: !todo.checked } : todo)
    }),
    // [REMOVE]: (state, { payload: id }) => ({
    //     ...state,
    //     todos: state.todos.filter((todo) => todo.id !== id)
    // }),
    [MODIFY]: (state, { payload: { id, text } }) => ({
        ...state,
        todos: state.todos.map((todo) =>
            todo.id === id ? { ...todo, text } : todo)
    }),
    // [LOAD_TODOS]: (state, { payload: todos }) => ({
    //     ...state,
    //     todos
    // })
}, init
);


export default todoList;