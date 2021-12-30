import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Adminservice from '../services/Adminservice';
import HeaderComponent from './HeaderComponent';
          
class Showadmin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            admin: []
        }

        // this.addAdmin=this.addAdmin.bind(this);
        this.editAdmin= this.editAdmin.bind(this);
        this.deleteAdmin = this.deleteAdmin.bind(this);
    }

    // here call our rest api using componentDidMount
    componentDidMount() {

        Adminservice.getAdmin().then((res) => {
            this.setState({ admin: res.data });
        });
    }


    deleteAdmin(e_id) {

        Adminservice.deleteAdmin(e_id).then((res) => {

            this.setState({admin: this.state.admin.filter(admin => admin.e_id !== e_id) });

        });
    }

    editAdmin(id) {

        this.props.history.push(`/update-admin/${id}`)
    }

    render() {
        return (
            <div>
                <HeaderComponent />
                <div className='container'>
                    <h2 className="text-center" >Admin List</h2>
                    <div>
                        {/* <button className="btn btn-success" onClick={this.addAdmin}>Add Admin</button> */}

                        <Link className="btn btn-success mb-3" tag="a"
                            to="/add-admin" action>Add Admin</Link>

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
                                this.state.admin.map(

                                    admin =>
                                        <tr key={admin.e_id}>

                                            {/* <td>{admin.e_id}</td>  */}
                                            <td>{admin.e_name}</td>
                                            <td>{admin.e_address}</td>
                                            <td>{admin.e_date}</td>
                                            <td>{admin.e_email}</td>
                                            <td>{admin.e_gender}</td>
                                            <td>{admin.e_mobile}</td>
                                            <td>{admin.e_userid}</td>
                                            <td>{admin.e_password}</td>
                                           {/* <td><img  src={"data:image/jpg;base64," + admin.image} alt='abc' width={80}  height= {80}/></td>  */}
                                           <td><img  src={"data:image/jpg;base64," + admin.image} alt='abc' width={80}  height={80} style={{borderRadius: '50%'}} /></td>

                                            <td>


                                                <button className="btn btn-success btn-sm " onClick={() => this.editAdmin(admin.e_id)}>Update</button>
                                                <button className="btn btn-danger btn-sm" onClick={() => this.deleteAdmin(admin.e_id)} style={{ marginLeft: "2px" }}>Delete</button>
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

export default Showadmin;

