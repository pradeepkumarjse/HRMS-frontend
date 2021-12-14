import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
//import styled from 'styled-components';
import { fetchUserData } from '../../api/authenticationService';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import HeaderComponent from '../../components/HeaderComponent';
import { useAuth0 } from '@auth0/auth0-react';

export const Dashboard = (props) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
            props.history.push('/');
        })
    }, [])

    const logOut = () => {
        console.log(data);
        localStorage.clear();
        props.history.push('/');

    }

    const {

        loginWithPopup,
        loginWithRedirect,
        logout,
        user,
        isAuthenticated,
    } = useAuth0();



    return (
       <div>
            {/* <MainWrapper> */}

            {/*                       
                          <li>
                            <button onClick={loginWithPopup}>Login</button>
                          </li>
                          <li>
                          */}



            {/* {
                          isAuthenticated && (
                          <pre style={{textAlign:'start'}}>       
                             {JSON.stringify(user,null,2)}
                          </pre>)
                        }  */}
                  
                  <HeaderComponent />
            <div className="row m-0">
                <div className="col-md-2 mt-2">
                    <nav className="list-group">
                        <Link to="/admin" className="btn  list-group-item list-group-item-action list-group-item-dark ">
                            <i class="fa fa-user" aria-hidden="true"></i> Admin</Link>
                        <Link to="/employee" className="btn list-group-item list-group-item-action ">
                            Employee</Link>
                        <Link to="/questions" className="btn list-group-item list-group-item-action ">Question</Link>
                        <Link to="user" className="btn list-group-item list-group-item-action ">Start Assessment</Link>
                        {/* <Link to="assessment" className="btn list-group-item list-group-item-action ">Start Accessment</Link> */}
                    </nav>
                </div>
                <div className="col-md-10">

                    <div className="container">


                    <h4>Hello, {data && `${data.firstName} ${data.lastName}`}</h4>
                <br></br>
                    </div>

                </div>

            </div>
            {/* </MainWrapper> */}
            </div>
    )
}
