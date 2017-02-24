
 // 1. Action information atbout what happened
 //copy of current state
import {FETCH_PROSPECT_SUCCESS,FETCH_PROSPECT,CREATE_PROSPECT,CREATE_PROSPECT_SUCCESS,DELETE_PROSPECT,DELETE_PROSPECT_SUCCESS,UPDATE_PROSPECT} from '../actions/actionCreator';
const INITIAL_STATE = { prospectList: {posts: [], error:null, loading: false},  };
 function prospect(state = INITIAL_STATE, action){
 	switch(action.type){
 		case FETCH_PROSPECT:
 		   console.log("fetching the prospect");
 		   return { ...state, prospectList: {posts:[], error: null, loading: true} }; 
 		   break;
 		case FETCH_PROSPECT_SUCCESS:
 		   console.log("fetching the prospect success");
 		    return { ...state, prospectList: {posts:action.payload, error: null, loading: false} }; 
 		    break;
 		case CREATE_PROSPECT:
 		return { ...state, newProspect: {posts:action.payload, error: null, loading: true} }; 
 			console.log("adding prospects");
 			break;
 		case CREATE_PROSPECT_SUCCESS:
 			console.log("adding prospects success",action.payload);
 			let temp = JSON.parse({...action.payload.config}.data);
 			temp = {...temp, job:{...temp.job, id:action.payload.data.job_id}}
 			console.log('success json data', temp);
 			return { ...state, prospectList: {posts:[...state.prospectList.posts,temp.job], error: null, loading: false} }; 
 			break;
 		case DELETE_PROSPECT:
	 		console.log("Deleting prospect" , state , "action ",action.id);
	 		return { ...state, deletedProspect: {posts:action.payload, error: null, loading: true} }; 
 		case DELETE_PROSPECT_SUCCESS:
	 		console.log("Deleting prospect sucess", state.prospectList.posts);
	 		console.log("After filtering",state.prospectList.posts.filter( (post) => post.id !== action.payload))
			return { ...state, prospectList: {...state.prospectList, posts: state.prospectList.posts.filter( (post) => post.id !== action.payload)}};
	 		break;
	 	case UPDATE_PROSPECT:
	 		console.log('update prospect');
	 	    break;	
	 	}
 	console.log(state,action);
 	return state;
 }

 export default prospect;