/**
 * Created by apple on 2017/10/12.
 */
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';

import ThunkMiddleware from 'redux-thunk';
import app from '../reducers/list';

const finalCreateStore = compose(
    applyMiddleware(ThunkMiddleware, routerMiddleware(hashHistory))
)(createStore);

const reducer = combineReducers({ app,
    routing: routerReducer,
});

export default function configureStore(initialState) {
    const store = finalCreateStore(reducer, initialState);

    return store;
}