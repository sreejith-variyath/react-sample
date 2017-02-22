
import axios from 'axios';

export const FETCH_PROSPECT = 'FETCH_PROSPECT';
export const FETCH_PROSPECT_SUCCESS = 'FETCH_PROSPECT_SUCCESS';

export const NEW_PROSPECT ='NEW_PROSPECT';
export const DELETE_PROSPECT='DELETE_PROSPECT';
export const UPDATE_PROSPECT='UPDATE_PROSPECT';


//action : type and payload
//ADD user
export function add(prospect){
	return {
		type:FETCH_PROSPECT,
		prospect //  makeServerRequest("http://postsServer.com/api/id")
	}
}

//Delete user
export function removeProspect(index){
	return {
		type:DELETE_PROSPECT,
		index 
	}
}
export function fetchProspect(index){
	const request = axios({
    method: 'get',
    url: `http://localhost:8345/mcf-api-service/json/jobs`,
    headers: []
  });
  return {
    type: FETCH_PROSPECT,
    payload: request
  };
}
export function fetchProspectSuccess(posts) {
  return {
    type: FETCH_PROSPECT_SUCCESS,
    payload: prospect
  };
}
