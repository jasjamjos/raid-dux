import React from 'react';
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';

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
    onIncrement: () => dispatch(actionCreators.increment()),
    onDecrement: () => dispatch(actionCreators.decrement()),
    onAdd: (value) => dispatch(actionCreators.add(value)),
    onSubtract: (value) => dispatch(actionCreators.subtract(value)),
    onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: (index) => dispatch(actionCreators.deleteResult(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);