import { createStore } from 'redux'

const initial = {
    counter: 0
}

function counter(state = initial, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        counter: state.counter - 1
      }
    default:
      return state
  }
}

const store = createStore(counter);

export default store;