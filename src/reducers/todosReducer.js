export default function(state = {
    fetching: false,
    fetched: false,
    error: null,
    todos: []
  }, action) {
    switch (action.type) {
      case 'GET_TODOS_PENDING': {
        return {
          ...state, 
          fetching: true
        }
      }
      case 'GET_TODOS_FULFILLED': {
        const newTodos = state.todos.concat(action.payload.data);
        return {
          ...state, 
          fetching: false, 
          fetched:true, 
          todos: newTodos
        }
      }
      case 'GET_TODOS_REJECTED': {
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
      }
      case 'TODO_INIT': {
        return {
          ...state,
          todo: {
            userId: action.payload.userId,
            id: action.payload.id,
            title: action.payload.title,
            completed: action.payload.completed
          }
        }
      }
      case 'ADD_TODO': {
        return {
          ...state, 
          todos: [
            ...state.todos,
            {
              userId: 1,
              id: action.payload.id,
              title: action.payload.title,
              completed: false
            }
          ]
        }
      }
      case 'TODO_TOGGLED': {
        return {
          ...state,
          todos: state.todos.map( todo => {
            if( todo.id !== action.payload.id) {
              return todo;
            }
  
            return {
              userId: todo.userId,
              id: todo.id,
              title: todo.title,
              completed: !todo.completed
            }
          })
        }
      }
      case 'DELETE_TODO': {
        return {
          ...state,
          todos: state.todos.filter( todo => action.payload.id !== todo.id )
        }
      }
      default: return state;
    }
  }