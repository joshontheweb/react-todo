import _ from 'lodash'
import {
  ADD_TODO,
  REMOVE_TODO,
  SET_TODO_COMPLETED,
  SET_TODO_INCOMPLETE
} from './actions'

export function todosReducer (state = [], action) {
  switch (action.type) {

    case ADD_TODO:
      return state.concat([{key: action.key, text: action.text}]);

    case REMOVE_TODO:
      return state.map((todo, idx) => {
        if (idx !== action.key) {
          return todo;
        }
      })

    default:
      return state;
  }
}
