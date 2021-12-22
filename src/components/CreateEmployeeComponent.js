import React, { Component } from 'react';
import Employeeservice from '../services/Employeeservice';
import HeaderComponent from './HeaderComponent';

class CreateEmployeeComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            address: '',
            date: '',
            email: '',
            gender: '',
            mobile: '',
            userid: '',
            password: '',
            image: '',
            
            nameerror: '',
            addresserror: '',
            dateerror: '',
            emailerror: '',
            mobileerror: '',
            useriderror: '',
            passworderror: '',
            imageerror: '',
        }

        this.changeName = this.changeName.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.changeDate = this.changeDate.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeGender = this.changeGender.bind(this);
        this.changeMobile = this.changeMobile.bind(this);
        this.changeimage=this.changeimage.bind(this);
        this.changeUserid = this.changeUserid.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    valid() {

        if (this.state.name == '' && this.state.address == '' && this.state.date == ''
            && this.state.email == '' && this.state.mobile == '' && this.state.userid == ''
            && this.state.password == '' && this.state.image == '') {
            this.setState({

                nameerror: "text field not empty", addresserror: "address field not empty", dateerror: "date field not empty"
                , emailerror: "email field not empty", mobileerror: "mobile field not empty", useriderror: "userid field not empty"
                , passworderror: "password field not empty" , imageerror: "plz select image"
            })
        }

        else if (this.state.name == '') {
            this.setState({ nameerror: "name field not empty" })
        }

        else if (this.state.address == '') {
            this.setState({ addresserror: "address field not empty" })
        }

        else if (this.state.date == '') {
            this.setState({ dateerror: "Date is required" })
        }

        else if (this.state.email == '') {
            this.setState({ emailerror: "email is required" })
        }
        else if (this.state.mobile == '') {
            this.setState({ mobileerror: "mobile no is required" })
        }
        else if (this.state.image == '') {
            this.setState({ imageerror: "image  is required" })
        }
        else if (this.state.userid == '') {
            this.setState({ useriderror: "userid is required" })
        }
        else if (this.state.password == '') {
            this.setState({ passworderror: "password is required" })
        }

        else {
            return true
        }

    }

    saveEmployee = (e) => {

        e.preventDefault();

        let emp = {
            e_name: this.state.name, address: this.state.address, e_date: this.state.date,
            e_email: this.state.email, e_gender: this.state.gender, e_mobile: this.state.mobile, e_userid: this.state.userid,
            e_password: this.state.password
        };

      let file = {
          image:this.state.image
      }

   


        
    // for image code

  
    // console.log(e.target.files);
    // const file = new FormData();
    // file.append('file', file);

        //  const file=new FormData();
        //  file.append("file name",this.state.image);
        
        console.log('emp =>' + JSON.stringify(emp));
        console.log('file =>' + JSON.stringify(file));
        // console.log(this.state.image);

        {
            this.setState({
                Nameerror: "", Addresserror: "", Dateerror: ""
                , Emailerror: "", Mobileerror: "", Useriderror: ""
                , passworderror: "" , imageerror: ""
            })
        }


        if (this.valid()) {


            Employeeservice.createEmployee(emp,file).then(res => {

                this.props.history.push('/employee');

            });

        }

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
        console.log(event.target.value);
    }

     changeimage=(event)=>{

     
    //     //  let file=event.target.files[0];
    let formdata=new FormData();
        console.log(event.target.files[0]);
        if (event.target && event.target.files[0]) 
        {
            formdata.append("file",event.target.files[0]);
            // this.setState({image:formdata});
        }
    //  this.setState({image:event.target.files});

        

    //     // const formdata=new FormData();

    //     // formdata.append("append file",files[0]);
    //     // let file=new FileReader();
    //     // file.readAsDataURL(files[0])
    //     // console.log("file available",files);
    //     // this.setState({image: event.target.files });
    //     // console.log(event.target.files);
    //     // this.state.image=files[0];
    //     // console.log(this.state.image=files[0]);
    //     // console.log(FormData);
    //     //  const formdata={image:file}
    //     // this.setState({ image:file});
    //     //  console.log(formdata);
    //     //  console.log(file);
    //     //  var fReader = new FileReader();
    //     // fReader.readAsDataURL(event.target.input.files[0]);   
    //     // console.log(fReader);

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
             <HeaderComponent/>

                <div className="continer">

                    <div className="row">

                        <div className="card col-md-4 offset-md-4 text-dark" >

                            <h3 className="text-center">Add Employee</h3>

                            <div className="card-body">

                                <form >
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" name="name" className="form-control" 
                                            value={this.state.name}
                                            onChange={this.changeName} />
                                        <span style={{ color: "red" }}>{this.state.nameerror}</span>
                                    </div>

                                    <div className="form-group">
                                        <label>Address</label>
                                        <input type="text" name="address" className="form-control"
                                            value={this.state.address}
                                            onChange={this.changeAddress} />
                                        <span style={{ color: "red" }}>{this.state.addresserror}</span>
                                    </div>

                                    <div className="form-group">
                                        <label>Date</label>
                                        <input type="date" name="date" className="form-control"
                                            value={this.state.date}
                                            onChange={this.changeDate} />
                                        <span style={{ color: "red" }}>{this.state.dateerror}</span>
                                    </div>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" className="form-control"
                                            value={this.state.email}
                                            onChange={this.changeEmail} />
                                        <span style={{ color: "red" }}>{this.state.emailerror}</span>
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
                                        <span style={{ color: "red" }}>{this.state.mobileerror}</span>
                                    </div>

                                    <div className="form-group">
                                        <label>image</label>
                                        <input type="file" name="image" className="form-control" 
                                            value={this.state.image}
                                            onChange={this.changeimage} />  
                                        <span style={{ color: "red" }}>{this.state.imageerror}</span>
                                    </div>

                                    <div className="form-group">
                                        <label>Userid</label>
                                        <input type="text" name="userid" className="form-control"
                                            value={this.state.userid}
                                            onChange={this.changeUserid} />
                                        <span style={{ color: "red" }}>{this.state.useriderror}</span>
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="text" name="password" className="form-control"
                                            value={this.state.password}
                                            onChange={this.changePassword} />
                                        <span style={{ color: "red" }}>{this.state.passworderror}</span>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveEmployee}>Save</button>
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

export default CreateEmployeeComponent;