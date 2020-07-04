const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  counter: 0
}

// REDUCER
const rootReducer = (state = initialState, action) => {
  if (action.type == 'INCREMENT_COUNTER') {
    return {
      ...state,
      counter: state.counter + 1
    }
  }
  if (action.type == 'ADD_COUNTER') {
    return {
      ...state,
      counter: state.counter + action.value
    }
  }

  return state
};

// STORE
const store = createStore(rootReducer);

// SUBSCRIPTION
store.subscribe(() => {
  console.log('[subscription]',store.getState())
})

// DISPATCHING ACTION
store.dispatch({type: 'INCREMENT_COUNTER'})
store.dispatch({
  type: 'ADD_COUNTER',
  value: 10
});
