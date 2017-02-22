
 // 1. Action information atbout what happened
 //copy of current state
import {FETCH_PROSPECT_SUCCESS,FETCH_PROSPECT,NEW_PROSPECT,DELETE_PROSPECT,UPDATE_PROSPECT} from '../actions/actionCreator';
const INITIAL_STATE = { prospectList: {posts: [], error:null, loading: false},  };
 function prospect(state = INITIAL_STATE, action){
 	switch(action.type){
 		case FETCH_PROSPECT:
 		   console.log("fetching the prospect");
 		   //return { ...state, prospectList: {posts:[], error: null, loading: true} }; 
 		   break;
 		case FETCH_PROSPECT_SUCCESS:
 		   console.log("fetching the prospect success");
 		    //return { ...state, prospectList: {posts:action.payload, error: null, loading: true} }; 
 		    break;
 		case NEW_PROSPECT:
 			console.log("adding prospects");
 			break;
 		case DELETE_PROSPECT:
	 		console.log("Deleting prospect" + state + "action "+action.id);
	 		break;
	 	case UPDATE_PROSPECT:
	 		console.log('update prospect');
	 	    break;	
	 	}
 	console.log(state,action);
 	return state;
 }

 export default prospect;