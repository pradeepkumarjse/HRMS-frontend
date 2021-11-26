import React, { Component } from 'react';
import Adminesrvice from '../service/Adminservice';

class UpdateAdminComponent extends Component {

    constructor(props){
        super(props)

        this.state={
            //getting id from route
             id:this.props.match.params.id,
             AdminId:'',
             AdminName:'',
             Adminemail:'',
              Gender:'',
              Mobile:'',
              Username:'',
              Password:''
        }

        this.changeAdminId=this.changeAdminId.bind(this);
        this.changeAdminName=this.changeAdminName.bind(this);
        this.changeAdminemail=this.changeAdminemail.bind(this);
        this.changeGender=this.changeGender.bind(this);
        this.changeMobile=this.changeMobile.bind(this);
        this.changeUsername=this.changeUsername.bind(this);
        this.changePassword=this.changePassword.bind(this);
        this.SaveAdmin=this.saveAdmin.bind(this);
    
    }

    //calling api 

    componentDidMount(){
        Adminservice.getAdminById(this.state.id).then((res)=>{
                let Admin =res.data;
                this.setState({AdminId:Admin.e_AdminId,
                    
                     Adminname:Admin.e_Adminname,
                    Adminemail:Admin.e_Adminemail,
                    gender:Admin.e_Gender,
                    mobile:Admin.e_Mobile,
                    username:Admin.e_Username,
                    password:Admin.e_Password});
            

                    })
        
    }

    updateAdmin=(e)=>{

        e.preventDefault();

        let admin = {e_AdminId:this.state.AdminId,
            e_Adminname:this.state.Adminname,
  e_Adminemail:this.state.Adminemail,
  e_gender:this.state.Gender,
  e_mobile:this.state.Mobile,
  e_username:this.state.Username,
  e_password:this.state.Password};

        console.log('emp =>' +JSON.stringify(admin));

        Adminservice.updateAdmin(this.state.id,admin).then(res =>{

            this.props.history.push('/');
        });

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


    changeGender=(event)=>{
        this.setState({gender:event.target.value});
    }

    changeMobile=(event)=>{
        this.setState({mobile:event.target.value});
    }

    changeUsername=(event)=>{
        this.setState({username:event.target.value});
    }

    changePassword=(event)=>{
        this.setState({password:event.target.value});
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
                                            <label>Username</label>
                                            <input type="text" name="username" className="form-control"
                                            value={this.state.username} 
                                            onChange={this.changeUsername} />
                                        </div>

                                        <div className="form-group">
                                            <label>Password</label>
                                            <input type="text" name="password" className="form-control"
                                            value={this.state.password} 
                                            onChange={this.changePassword} />
                                        </div>
                                            
                                        <button className="btn btn-success" onClick={this.saveAdmin}>Save</button>

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