import React from 'react';
import { connect } from 'react-redux';

import * as actionTypes from '../../store/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Counter = (props) => {
    return (
        <div>
            <CounterOutput value={props.ctr} />
            <CounterControl label="Increment" clicked={props.onIncrement} />
            <CounterControl label="Decrement" clicked={props.onDecrement}  />
            <CounterControl label="Add 5" clicked={() => props.onAdd(5)}  />
            <CounterControl label="Subtract 5" clicked={() => props.onSubtract(5)}  />
            <hr />
            <input type="button" onClick={() => props.onStoreResult(props.ctr)} value="Store Result"/>
            <ul>
              {props.results && props.results.map((res, idx) => {
                return <li key={idx} onClick={() => props.onDeleteResult(idx)}>{res}</li>
              })}
              
            </ul>
        </div>
    );
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counterReducer.counter,
    results: state.resultReducer.results
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch({type: actionTypes.INCREMENT}),
    onDecrement: () => dispatch({type: actionTypes.DECREMENT}),
    onAdd: (value) => dispatch({type: actionTypes.ADD, value: value}),
    onSubtract: (value) => dispatch({type: actionTypes.SUBTRACT, value: value}),
    onStoreResult: (result) => dispatch({type: actionTypes.STORE_RESULT, counter: result}),
    onDeleteResult: (index) => dispatch({type: actionTypes.DELETE_RESULT, index: index})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);