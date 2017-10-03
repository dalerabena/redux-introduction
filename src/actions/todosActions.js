import axios from 'axios';

export function fetchTodos() {
  return function(dispatch) {
    dispatch({
      type: 'GET_TODOS', 
      payload: axios.get('http://localhost:4000/todos')
    });
  }
} 

export function addTodos(id, title) {
  return function(dispatch) {
    dispatch({
      type: 'ADD_TODOS',
      payload: {
        id,
        title
      }
    });
  }
}

export function todoInit(userId, id, title, completed) {
  return function(dispatch) {
    dispatch({
      type: 'TODO_INIT',
      payload: {
        userId,
        id,
        title,
        completed
      }
    });
  }
}