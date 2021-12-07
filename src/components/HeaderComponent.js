import React, { useState } from 'react';
import { fetchUserData } from '../api/authenticationService';




const HeaderComponent = (props)=> {
    const [userData, setData] = useState({});

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
            props.history.push('/');
        })
    }, [])

    const logOut = () => {

        localStorage.clear();
        props.history.push('/');

    }


    
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md bg-primary">
                        <div className="container-fluid">

                            <a href="/" className="navbar-brand text-white">HRMS Dashboard</a>

                            <div class="d-flex">
                               
                                <button class="btn btn-success ml-2"  onClick={logOut}>Logout</button>
                            </div>
                        </div>

                    </nav>

                </header>

            </div>
        );
  
}

export default HeaderComponent;