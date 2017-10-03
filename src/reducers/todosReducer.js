export default function(state = {
    fetching: false,
    fetched: false,
    error: null,
    todos: [],
    todo: {
      userId: null,
      id: null,
      title: null,
      complete: null
    },
    item: null
  }, action) {
    switch (action.type) {
      case 'GET_TODOS_PENDING': {
        return {
          ...state, 
          fetching: true
        }
        break;
      }
      case 'GET_TODOS_FULFILLED': {
        const newTodos = state.todos.concat(action.payload.data);
        return {
          ...state, 
          fetching: false, 
          fetched:true, 
          todos: newTodos
        }
        break;
      }
      case 'GET_TODOS_REJECTED': {
        return {
          ...state,
          fetching: false,
          error: action.payload
        }
        break;
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
        break;
      }
    }
    return state;
  }