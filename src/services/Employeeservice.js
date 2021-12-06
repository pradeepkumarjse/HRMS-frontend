import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:4041/realcoder/api/employees";

class Employeeservice {

    getEmployee() {

        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(emp) {

        return axios.post(EMPLOYEE_API_BASE_URL, emp)
    }

    getEmployeeById(id) {

        return axios.get(EMPLOYEE_API_BASE_URL + '/' + id);
    }

    deleteEmployee(e_id) {

        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + e_id);
    }

    updateEmployee(e_id, employee) {
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + e_id, employee);
    }

}

export default new Employeeservice();