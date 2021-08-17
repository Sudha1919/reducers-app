function reducermain(state = { counter: 10 }, action) {
  /*function dispatchAndLog(store, action){
    console.log('dispatching', action);
    store.dispatch(action) ;
     console.log('next state', store.getState())}*/

  switch (action.type) {
    case 'INC':
      return {
        ...state,
        counter: state.counter + 1
      };
      break;
    case 'DEC':
      return {
        ...state,
        counter: state.counter - 1
      };
      break;
  }
  return state;
}
export default reducermain;
