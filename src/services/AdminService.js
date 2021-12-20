import axios from "axios";

const ADMIN_API_BASE_URL = "http://localhost:4041/api/v1/admin";

class Adminservice {

    getAdmin() {

        return axios.get(ADMIN_API_BASE_URL);
    }

    createAdmin(emp) {

        return axios.post(ADMIN_API_BASE_URL, emp)
    }

    getAdminById(id) {

        return axios.get(ADMIN_API_BASE_URL + '/' + id);
    }

    deleteAdmin(e_id) {

        return axios.delete(ADMIN_API_BASE_URL + '/' + e_id);
    }

    updateAdmin(e_id, admin) {
        return axios.put(ADMIN_API_BASE_URL + '/' + e_id, admin);
    }

}

export default new Adminservice();