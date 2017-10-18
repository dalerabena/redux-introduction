import { base } from '../firebaseApp';

export const fetchClicks = () => 
  dispatch => {
    base.fetch('app', {
      context: this
    }).then(data => {
      dispatch({
        type: 'SET_VALUE',
        payload: data.clicks
      })
    }).catch(err => {
      console.log(err);
    })
  }

export const incrementClick = () =>
  dispatch => {
    base.fetch('app', {
      context: this
    }).then(data => {
      let newValue = data.clicks + 1;
      console.log(newValue);
      base.update('app', {
        data: {clicks: newValue}
      }).then(() => {
        console.log('success incrementing clicks');
        dispatch({
          type: 'SET_VALUE',
          payload: newValue
        });
      }).catch(err => {
        console.log(err);
      });
    }).catch(err => {
      console.log(err);
    })    
  }

export const decrementClick = () =>
  dispatch => {
    base.fetch('app', {
      context: this
    }).then(data => {
      let newValue = data.clicks - 1;
      console.log(newValue);
      base.update('app', {
        data: {clicks: newValue}
      }).then(() => {
        console.log('success decrementing clicks');
        dispatch({
          type: 'DEC',
          payload: 1
        });
      }).catch(err => {
        console.log(err);
      });
    }).catch(err => {
      console.log(err);
    })    
  }

export const resetClick = () =>
  dispatch => {
    base.update('app', {
      data: {clicks: 0}
    }).then(() => {
      console.log('clicks has been reset');
      dispatch({
        type: 'RESET'
      });
    }).catch(err => {
      console.log(err);
    }); 
  }
    