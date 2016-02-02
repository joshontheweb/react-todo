import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from './action_creators'

class Todo extends React.Component {
  onTodoClick (key) {
    this.props.dispatch(actionCreators.removeTodo(key))
  }

  render () {
    var { text, key } = this.props.data

    return (
      <li id={key} onClick={() => this.onTodoClick(key)}>
        {text}
      </li>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.id,
    text: state.text
  }
}

const ConnectedTodo = connect(mapStateToProps)(Todo);

export default ConnectedTodo
