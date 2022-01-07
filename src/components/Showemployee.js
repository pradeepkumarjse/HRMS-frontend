import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Employeeservice from '../services/Employeeservice';
import HeaderComponent from './HeaderComponent';


class showemployee extends Component {

    constructor(props) {
        super(props)

        this.state = {
            employees: []
        }

      
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        
    }

  
    // here call our rest api using componentDidMount
    componentDidMount() {

        Employeeservice.getEmployee().then((res) => {
            this.setState({ employees: res.data });
        });
    }


    deleteEmployee(e_id) {

        Employeeservice.deleteEmployee(e_id).then((res) => {

            this.setState({ employees: this.state.employees.filter(employee => employee.e_id !== e_id) });

        });
    }

    editEmployee(id) {

        this.props.history.push(`/update-employee/${id}`)
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <div className='container'>
                    <h2 className="text-center" >Employee List</h2>
                    <div>
                        {/* <button className="btn btn-success" onClick={this.addEmployee}>Add Employee</button> */}

                        <Link className="btn btn-success mb-3" tag="a"
                            to="/add-employee" action>Add Employee</Link>

                    </div>
                    <table className="striped bordered table hover">

                        <thead>
                            <tr>

                                {/* <th>Id</th> */}
                                <th>Name</th>
                                <th>Address</th>
                                <th>Date</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Mobile</th>
                                <th>Userid</th>
                                <th>Password</th>
                                <th>image</th>
                                <th className="text-center">Action</th>

                            </tr>
                        </thead>

                        <tbody>

                            {
                                this.state.employees.map(

                                    employee =>
                                        <tr key={employee.e_id}>

                                            {/* <td>{employee.e_id}</td>  */}
                                            <td>{employee.e_name}</td>
                                            <td>{employee.address}</td>
                                            <td>{employee.e_date}</td>
                                            <td>{employee.e_email}</td>
                                            <td>{employee.e_gender}</td>
                                            <td>{employee.e_mobile}</td>
                                            <td>{employee.e_userid}</td>
                                            <td>{employee.e_password}</td>

                                            <td><img  src={"data:image/jpg;base64," + employee.image} alt='abc' width={30}  height={30} style={{borderRadius: '50%'}} /></td>

                                            <td>


                                                <button className="btn btn-success btn-sm " onClick={() => this.editEmployee(employee.e_id)}>Update</button>
                                                <button className="btn btn-danger btn-sm" onClick={() => this.deleteEmployee(employee.e_id)} style={{ marginLeft: "2px" }}>Delete</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>

                    </table>
                </div>

            </div>
        );
    }
}

export default showemployee;