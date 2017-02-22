import {createStore,compose} from 'redux'; //
import {syncHistoryWithStore} from 'react-router-redux'; // hookup
import {browserHistory} from 'react-router';
import rootReducer from '../reducers/index';
import prospect from '../data/prospects.js';

//create an object for default data

const defaultState = {prospect};

const store = createStore(rootReducer,defaultState);
export const history=syncHistoryWithStore(browserHistory,store);
export default store;

