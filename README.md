Universal web app skeleton
==========================
Production-ready server rendering via [create-render-4r](https://github.com/heroku/create-render-4r) for a React+Router+Redux+Radium app. Includes development server with hot module reloading.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/heroku/skeleton-4r)

Installation
------------

* Clone this repo
* `npm install`

Usage
-----

* Development
  * `cp .env.sample .env` and then add/set new variables in that file for your specific app
  * `npm run dev`
* Production
  * `npm run build`
  * `NODE_ENV=production npm start`

### Environment variables

Redux `state.configVars` may be loaded with the values of [environment variables](https://en.wikipedia.org/wiki/Environment_variable), like API URL, public key, or token.

These vars may also be used in the HTML layout template. Example: [`layoutHtml` function](app/server/layout-html.jsx) & its [binding to environment values](app/server/use-middleware.jsx).

Define new vars in the [`configVars` Redux reducer](app/universal/reducers/config-vars.jsx).

Examples provided this app skeleton:

  * `BASE_URL`, example `https://example.com`
  * `API_URL`, example `https://api.example.com`

**For local development** `cp .env.sample .env` and then add/set new variables in that file for your specific app.

**For production** set the process' environment variable; use [Heroku Config Vars](https://devcenter.heroku.com/articles/config-vars).

File structure
--------------

### `app/universal`
Contains the universal javascript app which runs on the server & in web browsers. This folder may be organized how ever you prefer! The skeleton's universal contents are merely a sample.

  * `app/universal/load-store.js` must return a the result of [Redux `createStore`](http://redux.js.org/docs/api/createStore.html).
  * `app/universal/routes.js` must return a configured [React Router](https://github.com/reactjs/react-router/blob/master/docs/API.md#router).

### `app/{client,dev-server,server}`
Each contain entrypoint-specific code to run the universal code in different environments. `client` is for web browsers via Webpack. `server` is for the Node.js server. `dev-server` is a hybrid Node.js server that dynamically rebuilds the bundle with Webpack providing hot module replacement.

  * `app/server/layout-html.js` must return a [template function](https://github.com/heroku/create-render-4r#layouthtml).