export default function(state=0, action) {
  switch (action.type) {
    case 'INC': return state + action.payload; break;
    case 'DEC': return state - action.payload; break;
    case 'RESET':  return state=0; break; 
    default: return state;
  }
}