import * as actionTypes from '../actions';

// const [initialState, setInitialState] = useState({
//   counter: 0
// });

const initialState = {
  results: []
}

const reducer = (state = initialState, action) => {

  switch(action.type) {
    
    case actionTypes.STORE_RESULT:
      let newResults = [...state.results]
      newResults.push(action.counter);
      return {
        ...state,
        results: newResults
      }

    case actionTypes.DELETE_RESULT:
      let _newResults = state.results.filter((_, idx) => idx !== action.index);
      return {
        ...state,
        results: _newResults
      }

    default:
      return state;
  }
}

export default reducer;