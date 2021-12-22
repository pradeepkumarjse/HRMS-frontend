import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:4041/realcoder/api/employees";

const headers = { 
    'content-type': 'application/json',
    

};

class Employeeservice {

    getEmployee() {

        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(emp,file) {

      
        return axios.post( EMPLOYEE_API_BASE_URL, emp,file)

        // return axios({
        //     url:EMPLOYEE_API_BASE_URL,
        //     method:"POST",
        //     emp,
        //     file
        // })

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