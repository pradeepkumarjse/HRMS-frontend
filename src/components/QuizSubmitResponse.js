import React, { useState } from 'react';
import { fetchUserData } from '../api/authenticationService';
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router";



export default function QuizSubmitResponse() {
    let history = useHistory();
    let location=useLocation();
    const [userFeedback,setUserFeedback]=useState('');

    const [userData, setData] = useState({});
    React.useEffect(() => {
        fetchUserData().then((response) => {
            setData(response.data);
        }).catch((e) => {
            localStorage.clear();
           history.push('/');
        })
    }, [])

     const sendFeedback=(e)=>{
         e.preventDefault();
         console.log("feedback send seccessfully...")
         console.log(userFeedback);
         console.log(location.username)
     }

    


    return (
        <div>
            <div className="text-center mt-5">
            <div className="container">
                 <h2 style={{ color: 'green' }}>Thanks for giving the Assessment...</h2>
            </div>
                 <br/>
                 <div >
                 <textarea  name="subject" value={userFeedback} onChange={ e => setUserFeedback(e.target.value)} placeholder="Write something.." style={{"height" : "200px", "width" : "400px"}}></textarea>
                 <button onClick={sendFeedback}>send feedback</button>
                 </div>
            </div>
        </div>
    )
}
