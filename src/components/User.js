import React, { useState, useEffect } from "react";

import QuizService from "../services/QuizService";
import { fetchUserData } from '../api/authenticationService';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Assessment from "./Assessment";
import HeaderComponent from '../components/HeaderComponent';

// let user=''
const User = (props) => {

    const [username, setUsername] = useState('');
    const [userData, setData] = useState({});


    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
            props.history.push('/');
        })
    }, [])




    // QuizCall(username){

    //     QuizService.QuizAns().then(
    //         (response)=>{
    //                 console.log(response);
    //                 console.log(response.data);
    //                 setUser(response.data);
    //         },
    //         (error)=>{
    //                 console.log(error);
    //         });

    // }

    const onChangeHandler = (setUsername, event) => {
        setUsername(event.target.value)
        // console.log(username);
        // user=username
        return (
            <Assessment user={props.username} />)
    }


    return (

        <div>
       
              <HeaderComponent/>
           
           <div className="main-container container py-5 px-4">

            <div className="card  py-5 px-4" >           


                <div className="">
                    <label class="username">Enter Username</label>
                    <input type="text" className="form-control mb-2 mt-2" onChange={onChangeHandler.bind(this, setUsername)} id="username" aria-describedby="emailHelp" placeholder="Enter Username" name="username" />

                </div>
                <Link to={{ pathname: '/assessment', state: username }} className="btn btn-info" >Start Test</Link>

                
                
          </div> 



            </div>

        </div>
    )


}

export default User;