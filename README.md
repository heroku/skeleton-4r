Universal web app skeleton
==========================
Production-ready server rendering via [create-render-4r](https://github.com/heroku/create-render-4r) for a React+Router+Redux+Radium app. Includes development server with hot module reloading.

Installation
------------

* Clone this repo
* `npm install`

Usage
-----

* Development
  * `npm run dev`
* Production
  * `npm run build`
  * `NODE_ENV=production npm start`

File structure
--------------

### `app/universal`
Contains the universal javascript app which runs on the server & in web browsers. This folder may be organized how ever you prefer! The skeleton's universal contents are merely a sample.

  * `app/universal/load-store.js` must return a the result of [Redux `createStore`](http://redux.js.org/docs/api/createStore.html).
  * `app/universal/routes.js` must return a configured [React Router](https://github.com/reactjs/react-router/blob/master/docs/API.md#router).

### `app/{client,dev-server,server}`
Each contain entrypoint-specific code to run the universal code in different environments. `client` is for web browsers via Webpack. `server` is for the Node.js server. `dev-server` is a hybrid Node.js server that dynamically rebuilds the bundle with Webpack providing hot module replacement.

  * `app/server/layout-html.js` must return a [template function](https://github.com/heroku/create-render-4r#layouthtml).