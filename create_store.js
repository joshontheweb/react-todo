import {createStore, combineReducers} from 'redux'
import * as reducers from './reducers'

var reducer = combineReducers({
  todos: reducers.todosReducer,
  todo: reducers.todoReducer
});

export default function () { return createStore(reducer) }
