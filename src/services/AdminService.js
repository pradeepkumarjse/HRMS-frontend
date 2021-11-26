import axios from 'axios';

const ADMIN_API_BASE_URL = "http://localhost:8088/Admin-module/api/v1/"

class AdminService{


    getAdmin(){
        return axios.get(ADMIN_API_BASE_URL); 

    }

    createAdmin(admin){
        return axios.post(ADMIN_API_BASE_URL,admin)
    }
    getAdmin(admin){
        return axios.get(ADMIN_API_BASE_URL+'/'+admin);
    }
    deleteAdmin(admin){
        return axios.delete(ADMIN_API_BASE_URL+'/'+admin);
    }
    updateAdmin(admin){
        return axios.put(ADMIN_API_BASE_URL+'/'+admin);
    }
}

export default new AdminService()