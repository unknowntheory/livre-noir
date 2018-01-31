// import React, { Component } from 'react';
// import ReactDOM from 'react-dom'

// class Hello extends Component {
//   render() {
//     return (
//       <div>
//         <h1> HELLO WORLD </h1>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Hello />, document.getElementById('app') )

// export default Hello;
import ReactDom from 'react-dom'
import React, { Component } from 'react';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import * as reducers from 'reduxModules'
import routes from './config/routes'

const store = createStore(combineReducers(reducers), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
))


ReactDom.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
)