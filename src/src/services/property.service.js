
import http from "../http-common";
import { getCookie  } from "../utils/cookies";
let token = getCookie("token")

class PropertyDataService {

       
        getAllProperty()  {
            return http.get("/properties/get_list");
        }

        getUserPerperty() {
            return http.get("/properties",  {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        show(){

        }

        create(data) {
            return http.post("/tutorials", data);
        }

        update(id, data) {
            return http.put(`/tutorials/${id}`, data);
        }

        delete(id) {
            return http.delete(`/rooms/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        }

        deleteAll() {
            return http.delete(`/tutorials`);
        }

        findByTitle(title) {
            return http.get(`/tutorials?title=${title}`);
        }
}

export default new PropertyDataService();