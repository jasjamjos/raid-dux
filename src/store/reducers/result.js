import * as actionTypes from '../actions/actionsType';
import { updateObject } from '../utility';

const initialState = {
  results: []
}

const deleteResult = (state, action) => {
  let _newResults = state.results.filter((_, idx) => idx !== action.index);
  return updateObject(state, {results: _newResults});
}

const reducer = (state = initialState, action) => {

  switch(action.type) {
    
    case actionTypes.STORE_RESULT: return updateObject(state, {results: state.results.concat(action.counter)});
    case actionTypes.DELETE_RESULT: return deleteResult(state, action);

    default:
      return state;
  }
}

export default reducer;