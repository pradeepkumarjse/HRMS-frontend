import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Adminservice from '../service/Adminservice';

class showAdmin extends Component {

    constructor(props){
        super(props)

        this.state={
             admin:[]   
        }

        // this.addAdmin=this.addAdmin.bind(this);
        this.editAdmin=this.editAdmin.bind(this);
        this.deleteAdmin=this.deleteAdmin.bind(this);
    }

// here call our rest api using componentDidMount
    componentDidMount(){

        Adminservice.getAdmin().then((res)=>{
            this.setState({admin:res.data});
        });
    }


    deleteAdmin(e_id){

        Adminservice.deleteAdmin(e_id).then((res)=>{

            this.setState({admin:this.state.admin.filter(admin =>admin.e_id !==e_id)});
            
        });
    }

    editAdmin(id){
        
        this.props.history.push(`/update-admin/${id}`)
    }

    render() {
        return (
            <div>
                <h2 className="text-center" >Admin List</h2>
                <div>
                    {/* <button className="btn btn-success" onClick={this.addAdmin}>Add Admin</button> */}
                
                <Link className="btn btn-success mb-3"  tag="a"
                to="/add-admin" action>Add Admin</Link>

                </div>
               <table className="striped bordered table hover">

               <thead>
                 <tr>
                    
                    {/* <th>Id</th> */}
                                <th>Admin Id</th>
                                <th>Admin Name</th>
                                <th>Admin Email</th>
                                <th>Gender</th>
                                <th>Mobile</th>
                                <th>Username </th>
                                <th>Password </th>        
                     <th className="text-center">Action</th>

                 </tr>
                </thead>

                <tbody>

                {
                    this.state.admin.map(

                        admin =>
                        <tr key={admin.e_id}>

                        {/* <td>{admin.e_id}</td>  */}
                        <td>{admin.e_AdminId}</td>
                        <td>{admin.AdminName}</td>
                        <td>{admin.e_Adminemail}</td>
                        <td>{admin.e_Gender}</td>
                        <td>{admin.e_Mobile}</td>
                        <td>{admin.e_Username}</td>
                        <td>{admin.e_Password}</td>
                        <td>
                       
         
                        <button className="btn btn-success " onClick={()=>this.editAdmin(admin.e_id)}>Update</button>
                        <button className="btn btn-danger" onClick={()=>this.deleteAdmin(admin.e_id)} style={{marginLeft:"10px"}}>Delete</button> 
                        </td>
                        </tr>
                    )
                }
                </tbody>

               </table>
               
            </div>
        );
    }
}

export default showAdmin;