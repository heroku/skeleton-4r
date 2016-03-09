import {
  applyMiddleware,
  createStore,
  combineReducers }               from 'redux';
import thunk                      from 'redux-thunk';

import { reducers as cr4rReducers } from 'create-render-4r'
import * as reducers              from 'universal/reducers';

export default function loadStore(...createStoreRestParams) {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  const reducer                   = combineReducers(
    Object.assign({}, reducers, cr4rReducers))
  const store                     = 
    createStoreWithMiddleware(reducer, ...createStoreRestParams);
  return store;
}
