

import http from "../http-common";
import { getCookie  } from "../utils/cookies";

const cttoken = getCookie("token")


class UserDataService {

    get(token){
        return http.get("/profiles",  {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    update(token, id, data){
        return http.put(`/profiles/${id}`, 
            {
                user: data
            },{
                headers: {
                    Authorization: `Bearer ${token}`
                }
        });
    }

    update_image(token, data){
        return http.post("/user/image", data ,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }

    delete(token){
        return http.delete("/user/destory",  {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}


export default new UserDataService();