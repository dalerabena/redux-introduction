export function incrementClick() {
  return function(dispatch) {
    dispatch({
      type: 'INC',
      payload: 1
    });
  }
}

export function decrementClick() {
  return function(dispatch) {
    dispatch({
      type: 'DEC',
      payload: 1
    });
  }
}

export function resetClick() {
  return function(dispatch) {
    dispatch({
      type: 'RESET'
    });
  }
}