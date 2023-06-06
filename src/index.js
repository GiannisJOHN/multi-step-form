import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App/App'
import { Provider } from 'react-redux'
import store from './global-state/store'

//all css files
import './css/css.js'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
