function reducermain(state = { counter: 0 }, action) {
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
