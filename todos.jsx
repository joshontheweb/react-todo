import React from 'react'
import { connect } from 'react-redux'
import Todo from './todo'


import * as actionCreators from './action_creators'

class Todos extends React.Component {
  onAddTodoClick (text = 'This is a TODO!') {
    this.props.dispatch(actionCreators.addTodo(this.props.todos.length, text))
  }

  render () {

    var { todos } = this.props
    var todoEls = todos.map(function (todo) {
      return <Todo data={todo} />
    })

    return (
      <div>
        {todoEls}
        <button onClick={() => this.onAddTodoClick()}>Add Todo</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const ConnectedTodos = connect(mapStateToProps)(Todos)

export default ConnectedTodos
