import {
  ADD_TODO,
  REMOVE_TODO,
  SET_TODO_COMPLETED,
  SET_TODO_INCOMPLETE
} from './actions'

export function addTodo (key, text) {
  return {type: ADD_TODO, key, text}
}

export function removeTodo (id) {
  return {type: REMOVE_TODO, id}
}

export function setTodoCompleted (id) {
  return {type: SET_TODO_COMPLETED, id}
}

export function setTodoIncomplete (id) {
  return {type: SET_TODO_INCOMPLETE, id}
}
