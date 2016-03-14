import Immutable from 'immutable';

const defaultState = new Immutable.Map({});

/*
Reducer that inserts configuration variables from the server process into Redux state.
*/
export default function configVars(state = defaultState, action) {
  // Should only run on the server-side and when the state has no `configVars` defined.
  if (state.isEmpty() && process && process.env && Object.keys(process.env).length) {
    return state.merge({

      // A few common examples…
      baseUrl: process.env.BASE_URL,
      apiUrl: process.env.API_URL,

      // Add more as needed to pass values from the server…
      // apiKey: process.env.apiKey,

    });
  } else {
    return state;
  }
}
