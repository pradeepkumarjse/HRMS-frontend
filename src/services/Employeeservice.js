import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:4041/realcoder/api/employees";

class Employeeservice {

    getEmployee() {

        return axios.get(EMPLOYEE_API_BASE_URL);
    }

//     createEmployee(emp,file) {  
//    // console.log(emp);
//    // console.log(file);
//         return  axios.post( EMPLOYEE_API_BASE_URL,emp,
//             {headers:{
//                 "Content-Type": "application/json",emp
//               }  }
//        );

//     }

    getEmployeeById(id) {

        return axios.get(EMPLOYEE_API_BASE_URL + '/' + id);
    }

    deleteEmployee(e_id) {

        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + e_id);
    }

    updateEmployee(e_id,file) {
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + e_id,file);
    }

}

export default new Employeeservice();