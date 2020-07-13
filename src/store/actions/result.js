import * as actionsTypes from './actionsType';

export const saveResult = (result) => {
  return {
    type: actionsTypes.STORE_RESULT,
    counter: result
  }
}

export const storeResult = (result) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult(result))
    }, 2000)
  }
}

export const deleteResult = (index) => {
  return {
    type: actionsTypes.DELETE_RESULT,
    index: index
  }
}