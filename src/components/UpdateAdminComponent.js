import React, { Component } from 'react';
import AdminService from '../services/AdminService';

class UpdateAdminComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            //getting id from route
             id:this.props.match.params.id,
             AdminId:'',
             AdminName:'',
             Adminemail:'',
             Date:'',
             Gender:'',
              Mobile:'',
              Userid:'',
              Password:'',
              City:''
              
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
        this.updateAdmin=this.updateAdmin.bind(this);
    
    }

    //calling api 

    componentDidMount(){
        AdminService.getAdminById(this.state.id).then((res)=>{
                let Admin =res.data;
                this.setState({
                    AdminId:Admin.e_AdminId,
                     Adminname:Admin.e_Adminname,
                    Adminemail:Admin.e_Adminemail,
                    Date:Admin.e_Date,
                    gender:Admin.e_Gender,
                    mobile:Admin.e_Mobile,
                    Userid:Admin.e_Userid,
                    password:Admin.e_Password,
                    city:Admin.e_City,
                
                })
            

                    });
        
    }

    updateAdmin=(e)=>{

        e.preventDefault();

        let admin = {
            e_Adminname:this.state.AdminName,
  e_Adminemail:this.state.Adminemail,
  e_Date:this.state.Date,
  e_gender:this.state.Gender,
  e_mobile:this.state.Mobile,
  e_Userid:this.state.Userid,
  e_password:this.state.Password,
  e_City:this.state.City};

        console.log('admin =>' +JSON.stringify(admin));

        AdminService.updateAdmin(this.state.id,admin).then(res =>{

            this.props.history.push('/admin');
        });

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
        this.setState({gender:event.target.value});
    }

    changeMobile=(event)=>{
        this.setState({mobile:event.target.value});
    }

    changeUserid=(event)=>{
        this.setState({Userid:event.target.value});
    }

    changePassword=(event)=>{
        this.setState({password:event.target.value});
    }

    changeCity=(event)=>{
        this.setState({City:event.target.value});

}

     





    render() {
        return (
            <div>
                
                <div className="continer">

                    <div className="row">

                            <div className="card col-md-4 offset-md-4">

                                    <h3 className="text-center">Update Admin</h3>

                                    <div className="card-body">

                                    <form>
                                        <div className="form-group">
                                            <label>AdminId</label>
                                            <input type="text" name="AdminId" className="form-control"
                                            value={this.state.AdminId} 
                                            onChange={this.changeAdminId} />
                                        </div>

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
                                            value={this.state.mobile} 
                                            onChange={this.changeMobile} />
                                        </div>

                                        <div classId="form-group">
                                            <label>Userid</label>
                                            <input type="text" name="userid" className="form-control"
                                            value={this.state.Userid} 
                                            onChange={this.changeUserid} />
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="text" name="password" className="form-control"
                                            value={this.state.password} 
                                            onChange={this.changePassword} />
                                        </div>


                                        <div className="form-group">
                                            <label>City</label>
                                            <input type="text" name="City" className="form-control"
                                            value={this.state.City} 
                                            onChange={this.changeCity} />
                                        </div>


                                            
                                        
                                        <button className="btn btn-success" onClick={this.updateAdmin}>Update</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>cancel</button>
                                    </form>
                                    </div>
                            </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default UpdateAdminComponent;