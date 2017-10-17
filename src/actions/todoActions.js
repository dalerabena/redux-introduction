import axios from 'axios';

export function fetchTodos() {
  return function(dispatch) {
    dispatch({
      type: 'GET_TODOS', 
      payload: axios.get('https://jsonplaceholder.typicode.com/todos')
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

export function toggleTodo(id) {
  return function(dispatch) {
    dispatch({
      type: 'TODO_TOGGLED',
      payload: {
        id
      }
    });
  }
}

export function deleteTodo(id) {
  return function(dispatch) {
    dispatch({
      type: 'DELETE_TODO',
      payload: {
        id
      }
    });
  }
} 