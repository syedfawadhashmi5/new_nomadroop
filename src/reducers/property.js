
import {
    CREATE_PROPERTY,
    ALL_PROPERTIES,
    UPDATE_PROPERTY,
    DELETE_PROPERTY,
    SHOW_PROPERTY,
    GET_PROPERTIES
  } from "../actions/types";


  const initialState = {
    loading: false, 
    list: [], 
    properties: [], 
    property: {}
  };
  
  function propertyReducer(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
          
      case CREATE_PROPERTY:
        return [...state, payload];

      case GET_PROPERTIES: 
        console.log('CLEAR_PROPERTY')
        console.log(state)
        console.log('updated')
        // if(action.payload.data.status == true){
        //   return { ...state, list: action.payload.data.wallet, sum: action.payload.data.awards_sum , loading: false}
        // } else {
        //   return { ...state, list: [] , loading: false}
        // }
        return state
      case SHOW_PROPERTY:
        return payload;
  
      case UPDATE_PROPERTY:
        return state.map((property) => {
          if (property.id === payload.id) {
            return {
              ...property,
              ...payload,
            };
          } else {
            return property;
          }
        });
  
      case DELETE_PROPERTY:
        
        return state.filter(({ id }) => id !== payload.id);
  
      case ALL_PROPERTIES:
        return  payload;
  
      default:
        return state;
    }
  };
  
  export default propertyReducer;

