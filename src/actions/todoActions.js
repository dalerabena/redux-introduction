import axios from 'axios';

export function fetchTodos() {
  return function(dispatch) {
    dispatch({
      type: 'GET_TODOS', 
      payload: axios.get('http://localhost:4000/todos')
    });
  }
} 

export function addTodo(id, title) {
  return function(dispatch) {
    dispatch({
      type: 'ADD_TODO',
      payload: {
        id,
        title
      }
    });
  }
}