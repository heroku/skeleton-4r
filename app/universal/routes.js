import React                      from 'react';
import { Route, IndexRoute }      from 'react-router';
import App                        from 'universal/components';
import Home                       from 'universal/components/screens/home';

export default (
  <Route component={App} path="/">
    <IndexRoute component={Home}/>
  </Route>
);
