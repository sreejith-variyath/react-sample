
import axios from 'axios';

export const FETCH_PROSPECT = 'FETCH_PROSPECT';
export const FETCH_PROSPECT_SUCCESS = 'FETCH_PROSPECT_SUCCESS';

export const FETCH_SPECIFIC_PROSPECT = 'FETCH_SPECIFIC_PROSPECT';
export const FETCH_SPECIFIC_PROSPECT_SUCCESS = 'FETCH_SPECIFIC_PROSPECT_SUCCESS';

export const CREATE_PROSPECT='CREATE_PROSPECT';
export const CREATE_PROSPECT_SUCCESS ='CREATE_PROSPECT_SUCCESS';

export const DELETE_PROSPECT='DELETE_PROSPECT';
export const DELETE_PROSPECT_SUCCESS='DELETE_PROSPECT_SUCCESS';

export const UPDATE_PROSPECT='UPDATE_PROSPECT';
export const UPDATE_PROSPECT_SUCCESS='UPDATE_PROSPECT_SUCCESS';


//action : type and payload
//ADD user
export function createProspect(prospect){
console.log("inside adding prospect",prospect);
const request = axios({
    method: 'post',
    data: prospect,
    url: `http://localhost:8345/mcf-api-service/json/jobs`
  });
console.log("create response",request);
  return {
   	type:CREATE_PROSPECT,
		payload:request //  makeServerRequest("http://postsServer.com/api/id")
	}
}
export function createProspectSuccess(newProspect) {

  return {
    type: CREATE_PROSPECT_SUCCESS,
    payload: newProspect
  };
}
/////////////////////////////////////////


export function deleteProspect(jobid){
  console.log('DeleteUrl', `http://localhost:8345/mcf-api-service/json/jobs/`+jobid);
  const request = axios({
    method: 'delete',
    url: `http://localhost:8345/mcf-api-service/json/jobs/`+jobid
  });
  return {
		type:DELETE_PROSPECT,
		payload:request 
	}
}
export function deleteProspectSuccess(jobid) {
  return {
    type: DELETE_PROSPECT_SUCCESS,
    payload: jobid
  };
}
////////////////////////////////////////
export function fetchProspect(){
	const request = axios({
    method: 'get',
    url: `http://localhost:2222/mcfgateway/prospect`    
  });
  return {
    type: FETCH_PROSPECT,
    payload: request
  };
}
export function fetchProspectSuccess(posts) {
  return {
    type: FETCH_PROSPECT_SUCCESS,
    payload: posts
  };
}
///////////////////////////////////////
