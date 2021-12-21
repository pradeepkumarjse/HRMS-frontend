import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { fetchUserData } from '../../api/authenticationService';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import HeaderComponent from '../../components/HeaderComponent';
import { useAuth0 } from '@auth0/auth0-react';

export  const UserDashboard = (props) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});

    // React.useEffect(() => {
    //     fetchUserData().then((response) => {
    //         setData(response.data);
    //     }).catch((e) => {
    //         localStorage.clear();
    //         props.history.push('/');
    //     })
    // }, [])

   

    const {
        loginWithPopup,
        loginWithRedirect,
        logout,
        user,
        isAuthenticated,
    } = useAuth0();



    return (
        <div>
            <HeaderComponent />
            <div className="container">
                <div className="col-md-2 mt-2">
                    <nav className="list-group">
                        {/* <Link to="/dashboard" className="btn  list-group-item list-group-item-action list-group-item-dark ">
                            <i class="fa fa-user" aria-hidden="true"></i> Admin</Link>
                        <Link to="/employee" className="btn list-group-item list-group-item-action ">
                            Employee</Link>
                        <Link to="/questions" className="btn list-group-item list-group-item-action ">Question</Link>
                        <Link to="/leader_board" className="btn list-group-item list-group-item-action ">LeaderBoard</Link> */}


                </nav>
                </div>
                <div className="col-md-10">
                    <div className="container">
                        <h4>Hello, {data && `${data.firstName} ${data.lastName}`}</h4><br/>
                        <Link to="/user" className="btn btn-info">Start Assessment</Link>

                        <br></br>
                    </div>
                </div>
            </div>
        </div>
    )
}
