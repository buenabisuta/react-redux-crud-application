import React from 'react';
import ReactDOM from 'react-dom';
import { createStore,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter,Route,Switch} from 'react-router-dom'
import { composeWithDevTools } from 'redux-devtools-extension'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import './index.css';
import EventsIndex from './components/events_index'
import reportWebVitals from './reportWebVitals'
import reducer from './reducers'
import EventsNew from './components/events_new'
import EventsShow from './components/events_show'

const enhancer = process.env.NODE_ENV === 'development' ?
  composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)

const store = createStore(reducer,enhancer)

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/events/new" component={EventsNew} />
          <Route path="/events/:id" component={EventsShow} />
          <Route exact path="/" component={EventsIndex} />
          <Route exact path="/events" component={EventsIndex} />
        </Switch>
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
