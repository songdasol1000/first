import client from "../api";

export const fetchAll = ()=> client.get('/api/todos'); 

export const insertTodo = (text)=> client.post('/api/todos', { text }); 

export const updateTodo = ({id, text, checked})=> 
    client.patch(`/api/todos/${id}`, { text, checked }); 

export const deleteTodo = (id) => client.delete(`/api/todos/${id}`);

