import Immutable, { fromJS }            from 'immutable';
import React                            from 'react';
import { render }                       from 'react-dom';

import { Router }                       from 'react-router';
import { createHistory, useQueries }    from 'history';

import { Provider }                     from 'react-redux';

import routes                           from 'universal/routes';
import loadStore                        from 'universal/load-store';


const initialState = {};
valuesToImmutable(window.__INITIAL_STATE__, initialState);

const history = useQueries(createHistory)();
const store = loadStore(initialState);

render((
    <Provider store={store}>
      <Router
        children={routes}
        history={history}/>
    </Provider>
  ),
  document.getElementById('react-view')
);


function valuesToImmutable(source, target) {
  target = typeof target === 'object' ? target : {};
  Object
    .keys(source)
    .forEach(key => {
      target[key] = fromJS(source[key], toImmutable);
     });
  return target;
}

function toImmutable(key, value) {
  let isIndexed = Immutable.Iterable.isIndexed(value);
  // convert Array to Set & Object to Map
  return isIndexed ? value.toSet() : value.toMap();
}
