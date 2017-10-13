/**
 * Created by apple on 2017/9/27.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers, compose,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Route, Router,BrowserRouter} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk'
import DevTools from './DevTools'
import { routerReducer, routerMiddleware } from 'react-router-redux';
const history = createHistory()

import app from '../reducers/list';

const finalCreateStore = compose(

    applyMiddleware(thunk, routerMiddleware(history)),
    DevTools.instrument()
)(createStore);

const reducer = combineReducers({ app,
    routing: routerReducer,
});


let store = finalCreateStore(reducer)


import List from '../containers/list';
import Content from '../containers/content';
import IndexContainer from "../components/index"



 ReactDOM.render(
     <Provider store={store}>
         <div>
             <BrowserRouter>
                 <IndexContainer>
                     <Route exact  path="/" component={List} />
                     <Route exact  path="/content" component={Content} />
                     <DevTools />
                 </IndexContainer>
             </BrowserRouter>

         </div>
     </Provider>
    ,
    document.getElementById('root')
)

