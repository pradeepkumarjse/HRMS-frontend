import React from 'react';
import {useAuth0} from '@auth0/auth0-react';


function HeaderComponent(){
    const {

        loginWithPopup,
        logout,
        user,
        isAuthenticated,
      }=useAuth0();
    
        
        return (
            <div>
            <header>
                <nav className="navbar navbar-expand-md bg-primary">
                    <div className="container-fluid">
        
                       <a href="/" className="navbar-brand text-white">HRMS Dashboard</a>
                       
                       <div class="d-flex">
                       <button class="btn btn-success" onClick={loginWithPopup}>SignIn</button>
                       <button class="btn btn-success ml-2">SignUp</button>
                       </div>
                    </div>

                </nav>

            </header>
                
            </div>
        );
    }

export default HeaderComponent;