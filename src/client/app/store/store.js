import { createStore, applyMiddleware, compose } from 'redux';
import {syncHistoryWithStore} from 'react-router-redux'; // hookup
import {browserHistory} from 'react-router';
import rootReducer from '../reducers/index';
import prospect from '../data/prospects.js';
import promise from 'redux-promise';
import reducer from '../reducers';
import { INITIAL_STATE } from '../reducers/prospect';

//create an object for default data

console.log("Inside Store");

export default function configureStore(initialState) {
  const finalCreateStore = compose(
    applyMiddleware(promise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);
  console.log(initialState);
  const store = finalCreateStore(reducer, initialState);
  return store;
}
/*
const defaultState = {prospect};

const store = createStore(rootReducer,defaultState);
export const history=syncHistoryWithStore(browserHistory,store);
export default store;
*/

