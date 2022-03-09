import client from "../api";

export const fetchAll = ()=> client.get('/api/todos'); 

export const insertTodo = (text)=> client.post('/api/todos', { text }); 

export const updateTodo = ({_id, text})=> client.patch(`/api/todos/${_id}`, { text : text }); 

export const deleteTodo = (id) => client.delete(`/api/todos/${id}`);

export const toggleTodo = ({_id, checked})=> client.patch(`/api/todos/${_id}`, { checked : !checked }); 
