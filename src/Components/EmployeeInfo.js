import React from 'react';

import { connect } from 'react-redux';

const EmployeeInfo = props => {
  console.log(props);
  return (
    <>
      <button onClick={props.decrement}>Decrement</button>
      <input type="text" placeholder="Incr/Decr here" value={props.counter} />
      <button onClick={props.increment}>Increment</button>
    </>
  );
};
const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INC' }),
    decrement: () => dispatch({ type: 'DEC' })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeInfo);
