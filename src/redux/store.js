import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { reducer } from './reducer';

const middlewares = [logger, thunk];

export let store = createStore(reducer, applyMiddleware(...middlewares));