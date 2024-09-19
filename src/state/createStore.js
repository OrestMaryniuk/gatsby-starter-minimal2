import { createStore as reduxCreateStore } from 'redux'

const reducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case `INCREMENT`:
      return { count: state.count + 1 }
    case `DECREMENT`:
      return { count: state.count - 1 }
    default:
      return state
  }
}

const createStore = () => reduxCreateStore(reducer)

export default createStore