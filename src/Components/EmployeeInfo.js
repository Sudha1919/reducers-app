import React from 'react';

import { connect } from 'react-redux';

const EmployeeInfo = props => {
  console.log(props);
  return (
    <>
      <button>Decrement</button>
      <input type="text" placeholder="Incr/Decr here" />
      <button>Increment</button>
    </>
  );
};
const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch({ type: 'INC' })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeInfo);
