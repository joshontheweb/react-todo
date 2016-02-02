import React from 'react'
import { Provider } from 'react-redux'
import Todos from './todos'

export default class Application extends React.Component {
  render () {
    return (
      <Provider store={this.props.store}>
        <Todos />
      </Provider>
    )
  }
}
