

import {
    GET_USER,
    UPDATE_USER,
    UPDATE_USER_IMAGE,
    DELETE_USER, 
    CLEAR_USER_IMAGE
} from "./types";
  
import UserDataService from "../services/users.service";

// Start: Get User Profile 
export const GetUser = (token) => async (dispatch) => {
  try {
        const res = await UserDataService.get(token);

        dispatch({
            type: GET_USER,
            payload: res,
        });
        
        } catch (err) {
            return Promise.reject(err);
        }
};
// End: Get User Profile 


// Start: Get User Profile 
export const UpdateUser = (token, id, userdata) => async (dispatch) => {
    try {
        const res = await UserDataService.update(token, id ,userdata);
  
        dispatch({
            type: UPDATE_USER,
            payload: res,
        });
      
        } catch (err) {
          return Promise.reject(err);
        }
};
  // End: Get User Profile 



  // Start: Get User Profile 
    export const DeleteUser = (token, id) => async (dispatch) => {
        try {
            const res = await UserDataService.delete(token, id);
    
            dispatch({
                type: DELETE_USER,
                payload: res,
            });
        
            } catch (err) {
            return Promise.reject(err);
            }
    };
  // End: Get User Profile 


  // Start: Get User Profile 
    export const UpdateImage = (token, data) => async (dispatch) => {
        try {

            const res = await UserDataService.update_image(token, data);
    
            dispatch({
                type: UPDATE_USER_IMAGE,
                payload: res,
            });
        
            } catch (err) {
            return Promise.reject(err);
            }
    };
  // End: Get User Profile 

  // Start: Clear Image 

  export const clearImage = () =>  async (dispatch) => {
    try {

        dispatch({
            type: CLEAR_USER_IMAGE,
            payload: [],
        });
    
        } catch (err) {
        return Promise.reject(err);
        }
};