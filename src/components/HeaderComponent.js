import React, { useState } from 'react';
import { fetchUserData,userLogout } from '../api/authenticationService';


import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import { useHistory } from "react-router-dom";





const HeaderComponent = (props)=> {
    const [userData, setData] = useState({});
    const dispatch = useDispatch();
    let history = useHistory();

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
           history.push('/');
        })
    }, [])

   
    const logOut = (e) => {
      
       localStorage.clear()
       history.push('/')

    }

    
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md bg-primary">
                        <div className="container-fluid">

                            <a href="/dashboard" className="navbar-brand text-white">HRMS Dashboard</a>

                            <div className="d-flex">
                            <img src={userData.profilePicPath} alt="profile pic" height={60} width={60} style={{borderRadius: '50%'}}/>
                                 <Button className="nav-item nav-link " style={{color:"white"}}>{userData && `${userData.firstName} ${userData.lastName}`}</Button>
                                 <Button  className="fa fa-sign-out" aria-hidden="true" onClick={logOut}>Logout</Button>
                            </div>

                            </div> 
                        

                    </nav>

                </header>

            </div>
        );
  
}

export default HeaderComponent;