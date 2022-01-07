import React, { Component } from 'react';
import AdminService from '../services/AdminService';
import HeaderComponent from './HeaderComponent';
import {Link} from 'react-router-dom';
// import {useNavigate} from 'react-router-dom';
class CreateAdminComponent extends Component {

    constructor(props){
        super(props)

        this.state={

            AdminName:'',
            Adminemail:'',
            Date:'',
             Gender:'',
             Mobile:'',
             Userid:'',
             Password:'',
             City:'',
             AdminNameerror:'',
             Adminemailerror:'',
             Dateerror:'',
              Gendererror:'',
              Mobileerror:'',
              Useriderror:'',
              Passworderror:'',
              Cityerror:''
              
        }

        this.changeAdminId=this.changeAdminId.bind(this);
        this.changeAdminName=this.changeAdminName.bind(this);
        this.changeAdminemail=this.changeAdminemail.bind(this);
        this.changeDate=this.changeDate.bind(this);
        this.changeGender=this.changeGender.bind(this);
        this.changeMobile=this.changeMobile.bind(this);
        this.changeUserid=this.changeUserid.bind(this);
        this.changePassword=this.changePassword.bind(this);
        this.changeCity=this.changeCity.bind(this);
        this.SaveAdmin=this.SaveAdmin.bind(this);
    }

    valid() {

        if (this.state.AdminName == '' && this.state.Gender == '' && this.state.Date == ''
            && this.state.Adminemail == '' && this.state.Mobile == '' && this.state.Userid == ''
            && this.state.Password == '' && this.state.City=='') {

            this.setState({

                AdminNameerror: "AdminName field not empty", Gendererror: "Gender field not empty", Dateerror: "date field not empty"
                , Adminemailerror: "Adminemail field not empty", Mobileerror: "Mobile field not empty", Useriderror: "Userid field not empty"
                , Passworderror: "password field not empty" , Cityerror: "City field not empty"
            })
        }

        else if (this.state.AdminName == '') {
            this.setState({ AdminNameerror: "AdminName field not empty" })
        }

        else if (this.state.City == '') {
            this.setState({ Cityerror: "City field not empty" })
        }

        else if (this.state.Date == '') {
            this.setState({ Dateerror: "Date is required" })
        }
            else if (this.state.Gender == '') {
                this.setState({ Gendererror: "Gender is required" })
        }

        else if (this.state.Adminemail == '') {
            this.setState({ Adminemailerror: "Adminemail is required" })
        }
        else if (this.state.Mobile == '') {
            this.setState({ Mobileerror: "Mobile no is required" })
        }
        else if (this.state.Userid == '') {
            this.setState({ Useriderror: "Userid is required" })
        }
        else if (this.state.Password == '') {
            this.setState({ Passworderror: "Password is required" })
        }
        else {
            return true
        }

    }

    SaveAdmin=(e)=>{

        e.preventDefault();

        let admin = {e_name:this.state.AdminName,
        e_email:this.state.Adminemail,e_date:this.state.Date,
        e_gender:this.state.Gender, e_mobile:this.state.Mobile,
       e_userid:this.state.Userid, e_password:this.state.Password,
        e_city:this.state.City};

        console.log('admin =>' +JSON.stringify(admin));


        {
            this.setState({
                AdminNameerror: "", Cityerror: "", Dateerror: ""
                , Adminemailerror: "", Mobileerror: "", Useriderror: ""
                , Passworderror: "", Gendererror:""
            })
        }


        if (this.valid()) {


        AdminService.CreateAdmin(admin).then(res =>{    

            this.props.history.push('/admin');

        });

    }
    }
    cancel(){
        this.props.history.push('/admin');
      }

    changeAdminId=(event)=>{
        this.setState({AdminId:event.target.value});
    }

    changeAdminName=(event)=>{
        this.setState({AdminName:event.target.value});
    }

    changeAdminemail=(event)=>{
        this.setState({Adminemail:event.target.value});
    }

    changeDate=(event)=>{
        this.setState({Date:event.target.value});

    }

    changeGender=(event)=>{
        this.setState({Gender:event.target.value});
    }

    changeMobile=(event)=>{
        this.setState({Mobile:event.target.value});
    }

    changeUserid=(event)=>{
        this.setState({Userid:event.target.value});
    }

    changePassword=(event)=>{
        this.setState({Password:event.target.value});

    }

        changeCity=(event)=>{
            this.setState({City:event.target.value});

    }




    render() {
        return (
            <div>
                
                <div className="continer">

                    <div className="row">

                            <div className="card col-md-4 offset-md-4 text-dark" >

                                    <h3 className="text-center">Add Admin</h3>

                                    <div className="card-body">

                                    <form>
                                        

                                        <div className="form-group">
                                            <label>AdminName</label>
                                            <input type="text" name="AdminName" className="form-control"
                                            value={this.state.AdminName} 
                                            onChange={this.changeAdminName} />
                                        </div>

                                        <div className="form-group">
                                            <label>Adminemail</label>
                                            <input type="Adminemail" name="Adminemail" className="form-control"
                                            value={this.state.Adminemail} 
                                            onChange={this.changeAdminemail} />
                                        </div>

                                      
                                        <div className="form-group">
                                            <label>Date</label>
                                            <input type="date" name="date" className="form-control"
                                            value={this.state.Date} 
                                            onChange={this.changeDate} />
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
                                            value={this.state.Mobile} 
                                            onChange={this.changeMobile} />
                                        </div>

                                        <div className="form-group">
                                            <label>Userid</label>
                                            <input type="text" name="userid" className="form-control"
                                            value={this.state.Userid} 
                                            onChange={this.changeUserid} />
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="text" name="password" className="form-control"
                                            value={this.state.Password} 
                                            onChange={this.changePassword} />
                                        </div>


                                        <div className="form-group">
                                            <label>City</label>
                                            <input type="text" name="City" className="form-control"
                                            value={this.state.City} 
                                            onChange={this.changeCity} />
                                        </div>


                                    

                                            
                                        <button className="btn btn-success" onClick={this.saveAdmin}>Save</button>
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

export default CreateAdminComponent;