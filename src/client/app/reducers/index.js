import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';
import prospect  from './prospect';
const rootReducer = combineReducers({prospect,routing:routerReducer});
export default rootReducer; 
