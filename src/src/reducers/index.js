

import { combineReducers } from "redux";
import propertyData from "./property";
import imagesData  from "./images";
import userData  from "./user";
import reservationData  from "./reservation";


export default combineReducers({
    propertyData,
    imagesData, 
    userData, 
    reservationData
});

