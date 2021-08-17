import React from 'react';
import { connect } from 'react-redux';


const employeeInfo =(props)=>{
return(
  <><p>{props.Name}</p></>
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