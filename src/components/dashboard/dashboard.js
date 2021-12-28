import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import { fetchUserData } from '../../api/authenticationService';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import HeaderComponent from '../../components/HeaderComponent';
import { useAuth0 } from '@auth0/auth0-react';
import CardMedia from "@material-ui/core/CardMedia";


export const Dashboard = (props) => {

    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    
    const {image} = useSelector(state => state.upload);


    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
            console.log(response.data);
        }).catch((e) => {
            localStorage.clear();
            props.history.push('/');
        })
    }, [])

   

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
            <div className="row m-0">
                <div className="col-md-2 mt-2">
                    <nav className="list-group">


                        <Link to="/admin" className="btn  list-group-item list-group-item-action list-group-item-dark ">

                        <Link to="/admin" className="btn  list-group-item list-group-item-action list-group-item-dark " >


                            <i class="fa fa-user" aria-hidden="true"></i> Admin</Link>
                        <Link to="/employee" className="btn list-group-item list-group-item-action ">
                            Employee</Link>
                        <Link to="/questions" className="btn list-group-item list-group-item-action ">Question</Link>
                        <Link to="/leader_board" className="btn list-group-item list-group-item-action ">LeaderBoard</Link>
                        <Link to="/user" className="btn list-group-item list-group-item-action ">Start Assessment</Link>
                        <Link to="/csvfile" className="btn list-group-item list-group-item-action ">Csv File</Link>

               </nav>
                </div>
              
                <div className="col-md-10">
                    <div className="container">
                        <h4>Hello, {data && `${data.firstName} ${data.lastName} ` }</h4>
                        <br></br>
                        {/* <img src={data.profilePicPath} alt="profile pic" height={60} width={60} style={{borderRadius: '50%'}}/> */}


                        {/* <img src={data.profilePicPath} alt="profile pic" height={100} width={100}/>          */}

                    </div>
                </div>
            </div>
        </div>
    )
}
