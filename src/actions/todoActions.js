import { base } from '../firebaseApp';
import uuidv4 from 'uuid/v4';

export const fetchTodos = () =>
  dispatch => {
    base.fetch('todos', {
      context: this,
      asArray: true
    }).then(data => {
      data.forEach(element => {
        dispatch({
          type: 'PUSH_TODO',
          payload: element
        })
      });
    }).catch(err => {
      dispatch({
        type: 'SET_ERROR',
        payload: err
      })
    })
  }

export const addTodo = (id, title) => 
  dispatch => {
    const todo = {
      userId: uuidv4(),
      title: title,
      completed: false
    };
    
    base.push('todos', {
      data: todo,
    }).then(response => {
      const todo = {
        userId: uuidv4(),
        id: response.key,
        title: title,
        completed: false
      };
      dispatch({
        type: 'ADD_TODO',
        payload: todo
      });
    }).catch(err => {
      dispatch({
        type: 'SET_ERROR',
        payload: err
      })
    });
  };

export const toggleTodo = (id) =>
  dispatch => {
    base.fetch("todos/" + id, {
      context: this
    }).then(data => {
      base.update("todos/" + id, {
        data: {completed: !data.completed}
      }).then(() => {
        dispatch({
          type: 'SET_SUCCESS',
          payload: true
        })
      }).catch(err => {
        dispatch({
          type: 'SET_ERROR',
          payload: err
        })
      });
    }).catch(err => {
      dispatch({
        type: 'SET_ERROR',
        payload: err
      })
    })
  }

export const deleteTodo = (id) =>
  dispatch => {
    base.remove("todos/" + id).then(() => {
      dispatch({
        type: 'DELETE_TODO',
        payload: {id}
      });
    }).catch(err => {
      dispatch({
        type: 'SET_ERROR',
        payload: err
      })
    })
  }