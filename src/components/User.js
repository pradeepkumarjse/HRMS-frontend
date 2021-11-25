import React, { useState, useEffect } from "react";

import QuizService from "../services/QuizService";

import { BrowserRouter as Router,Link,Route,Switch } from 'react-router-dom';
const User=()=>{

    const [user, setUser] = useState([]);

    useEffect(()=>{
         
    },[])

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

    return(

        <div>

            <div className="col-md-6 offset-3 mt-5" >
            {/* onSubmit={()=>this.QuizCall(username)} */}
        <form >
            <div class="form-group">
                <label for="user">User Name</label>
                <input type="text" class="form-control" id="user" aria-describedby="emailHelp" placeholder="Enter User Name"  name="username"/>
            </div>

            {/* <button type="submit" className="btn btn-primary" >Start Test</button> */}

            <Link to="assessment" className="btn btn-primary " >Start Test</Link> 

        </form>

        </div>

        </div>
    )

}
export default User;