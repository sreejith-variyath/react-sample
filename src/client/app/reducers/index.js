import {combineReducers} from 'redux';
import prospect  from './prospect';
const rootReducer = combineReducers(
	{prospect
		//routing:routerReducer
	});
// required store shaping change
/*
  "prospectList":prospect
*/
export default rootReducer; 
