import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:4041/api/v1/admin";

class AdminService{


    getAdmin(){
        return axios.get(ADMIN_API_BASE_URL); 

    }

    createAdmin(admin){
        return axios.post(ADMIN_API_BASE_URL,admin)
    }
    getAdminById(id){
        return axios.get(ADMIN_API_BASE_URL+'/'+id);
    }
    deleteAdmin(id){
        return axios.delete(ADMIN_API_BASE_URL+'/'+id);
    }
    updateAdmin(e_id,admin){
        return axios.put(ADMIN_API_BASE_URL+'/'+e_id,admin);
    }
}

export default new AdminService();