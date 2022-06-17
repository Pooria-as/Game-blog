import React from 'react'
import AppRoutes from './AppRoutes'
import ReactDOM from 'react-dom/client'
import thunk from 'redux-thunk'
import RootReducer from './store/reducers'
import { Provider } from 'react-redux' //bridge between react and redux
import { createStore, applyMiddleware, compose } from 'redux'
import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'))
const EhnaceCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = EhnaceCompose(applyMiddleware(thunk))(createStore)
root.render(
  <React.StrictMode>
    <Provider store={store(RootReducer)}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
