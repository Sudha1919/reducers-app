import React from 'react';
import { connect } from 'react-redux';


const employeeInfo =(props)=>{
return(
  <><button>Decrement</button>
    <input type='number' placeholder='number' />
    <button>Increment</button>
  </>
)
const mapStateToProps = state => {
  return state.red;
};
const mapDispatchToProps = dispatch => {
  return {
    sample: () => dispatch({ type: 'INC' })
  };
}
export default employeeInfo;