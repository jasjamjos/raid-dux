import * as actionsTypes from './actionsType';

export const increment = () => {
  return {
    type: actionsTypes.INCREMENT
  }
}

export const decrement = () => {
  return {
    type: actionsTypes.DECREMENT
  }
}

export const add = (value) => {
  return {
    type: actionsTypes.ADD,
    value: value
  }
}

export const subtract = (value) => {
  return {
    type: actionsTypes.SUBTRACT,
    value: value
  }
}
