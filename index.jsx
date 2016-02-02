import React from 'react'
import { render } from 'react-dom'
import createStore from './create_store'
import Application from './application'

const store = createStore();

render(
  <Application store={store} />,
  document.getElementById('application')
)
