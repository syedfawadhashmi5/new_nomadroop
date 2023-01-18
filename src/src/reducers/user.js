
  import {
      GET_USER,
      UPDATE_USER,
      UPDATE_USER_IMAGE,
      DELETE_USER, 
      CLEAR_USER_IMAGE
  } from "../actions/types";
  
  const initialState = {
    loading: false, 
    user: {},
    error: null,
    image_url: null
  };
  
  function userReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
          
      case GET_USER: 
        if(payload.data.success == true){
          return { ...state, user: payload.data.user, error: null , loading: false}
        } else {
          return { ...state, user: null , error: "User Profle not Getting", loading: false}
        }
      case UPDATE_USER:
        if(payload.data.success == true){
          return { ...state, user: payload.data.user, error: null , loading: false}
        } else {
          return { ...state, user: null , error: "Profile did not updated", loading: false}
        }
       
      case UPDATE_USER_IMAGE:
        if(payload.data.success == true){
          return { ...state, image_url: payload.data.image_url,  loading: false}
        } else {
          return { ...state, image_url: null , error: "Profile Image not updated", loading: false}
        }
      case DELETE_USER:
        if(payload.data.success == true){
          return { ...state, user: null , error: null, loading: false}
        } else {
          return { ...state, user: null , error: null, loading: false}
        }

      case CLEAR_USER_IMAGE: 
        console.log('Clear Image to Null')
        return { ...state, image_url: null,  loading: false}
  
      default:
        return state;
    }
  };
  
  export default userReducer;
