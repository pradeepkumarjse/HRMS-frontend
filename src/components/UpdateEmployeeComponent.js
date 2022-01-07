import React, { Component } from 'react';
import Employeeservice from '../services/Employeeservice';

class UpdateEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            //getting id from route
            id: this.props.match.params.id,
            name: '',
            address: '',
            date: '',
            email: '',
            gender: '',
            mobile: '',
            image:'',
            userid: '',                 
            password: ''
        }

        this.changeName = this.changeName.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeGender = this.changeGender.bind(this);
        this.changeMobile = this.changeMobile.bind(this);
        this.changeImage=this.changeImage.bind(this);
        this.changeUserid = this.changeUserid.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    //calling api 

    componentDidMount() {
        Employeeservice.getEmployeeById(this.state.id).then((res) => {
            let employee = res.data;
            this.setState({
                name: employee.e_name,
                address: employee.address,
                date: employee.e_date,
                email: employee.e_email,
                gender: employee.e_gender,
                mobile: employee.e_mobile,
                image:employee.image,
                image1:employee.image,
                userid: employee.e_userid,
                password: employee.e_password

            })
        });
    }

    updateEmployee = (e) => {

        e.preventDefault();

        const file  = new FormData();
        file.append("file",this.state.image );

        let emp = {
            e_id: this.state.id, e_name: this.state.name, address: this.state.address, e_date: this.state.date,
            e_email: this.state.email, e_gender: this.state.gender, e_mobile: this.state.mobile, e_userid: this.state.userid,
            e_password: this.state.password
        };

        const emp1=JSON.stringify(emp);
        const  blob= new Blob([emp1], {
            type: 'application/json'
          });

          file.append("emp",blob);

      //  console.log('emp =>' + JSON.stringify(emp));

        Employeeservice.updateEmployee(this.state.id,file).then(res => {

            this.props.history.push('/employee');
        });

    }
    cancel() {
        this.props.history.push('/employee');
    }

    changeName = (event) => {
        this.setState({ name: event.target.value });
    }

    changeAddress = (event) => {
        this.setState({ address: event.target.value });
    }

    changeDate = (event) => {
        this.setState({ date: event.target.value });
    }

    changeEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    changeGender = (event) => {
        this.setState({ gender: event.target.value });
    }

    changeMobile = (event) => {
        this.setState({ mobile: event.target.value });
    }

    changeImage = (event) => {
        this.setState({ image: event.target.files[0] });
    }

    changeUserid = (event) => {
        this.setState({ userid: event.target.value });
    }

    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }




    render() {
        return (
            <div>

                <div className="continer">

                    <div className="row">

                        <div className="card col-md-4 offset-md-4">

                            <h3 className="text-center">Update Employee</h3>

                            <img  src={"data:image/jpg;base64," + this.state.image1} alt='abc' width={60}  height={60} style={{borderRadius: '50%'}} className='mx-auto d-block' />
               

                            <div className="card-body">

                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" name="name" className="form-control"
                                            value={this.state.name}
                                            onChange={this.changeName} />
                                    </div>

                                    <div className="form-group">
                                        <label>Address</label>
                                        <input type="text" name="address" className="form-control"
                                            value={this.state.address}
                                            onChange={this.changeAddress} />
                                    </div>

                                    <div className="form-group">
                                        <label>Date</label>
                                        <input type="date" name="date" className="form-control"
                                            value={this.state.date}
                                            onChange={this.changeDate} />
                                    </div>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" className="form-control"
                                            value={this.state.email}
                                            onChange={this.changeEmail} />
                                    </div>

                                    <div className="form-group">
                                        <label>Gender: </label>
                                        <input type="radio" name="gender"
                                            value="male"
                                            onChange={this.changeGender} />Male
                                        <input type="radio" name="gender"
                                            value="female"
                                            onChange={this.changeGender} /> Female
                                    </div>

                                    <div className="form-group">
                                        <label>Mobile</label>
                                        <input type="text" name="mobile" className="form-control"
                                            value={this.state.mobile}
                                            onChange={this.changeMobile} />
                                    </div>

                                    <div className="form-group">
                                        <label>Image</label>
                                        <input type="file" name="file" className="form-control"
                                          
                                            onChange={this.changeImage} />
                                            
                                    </div>

                                    <div className="form-group">
                                        <label>Userid</label>
                                        <input type="text" name="userid" className="form-control"
                                            value={this.state.userid}
                                            onChange={this.changeUserid} />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="text" name="password" className="form-control"
                                            value={this.state.password}
                                            onChange={this.changePassword} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.updateEmployee}>Update</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

               

                </div>

            </div>
        );
    }
}

export default UpdateEmployeeComponent;


