
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { uploadImage } from "../actions/uploadActions";

const UserRegistration = (props) => {


    const dispatch = useDispatch();

    const [imageData, setImageData] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");






    let history = useHistory();




    const handleUploadClick = event => {
        let file = event.target.files[0];
        const imageData = new FormData();
        imageData.append('imageFile', file);
        setImageData(imageData);

    }

    const handleFirstName = event => {
        setFirstName(event.target.value);


    }


    const handleLastName = event => {
        setLastName(event.target.value);
        
    }
    const handleEmail = event => {
        setEmail(event.target.value);

    }
    const handlePhone = event => {
        setPhone(event.target.value);

    }


    const handleUsername = event => {
        setUsername(event.target.value);

    }
    const handlePassword = event => {
        setPassword(event.target.value);

    }



  

    const uploadImageWithAdditionalData = () => {
        
        imageData.append("imageName", firstName);
        imageData.append("firstName", firstName);
        imageData.append("lastName", lastName);
        imageData.append("email", email);
        imageData.append("phone", phone);
        imageData.append("username", username);
        imageData.append("password", password);
        dispatch(uploadImage(imageData))
          toast.success("Regsitration successfull!");
        history.push("/")

    }

    const switchToSignin = () => {
        history.push("/")

    }






    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h3 className="text-center mt-2 text-success">Register</h3>

                        <div className="card-body">

                            <form>
                                <div className="form-group">
                                    <label>First name</label>
                                    <input type="text" value={firstName} onChange={handleFirstName} placeholder="First Name" className="form-control mb-1" required/>
                                    <label>Last name</label>
                                    <input type="text" value={lastName} onChange={handleLastName} placeholder="Last Name" className="form-control mb-1" required/>
                                    <label>Email</label>
                                    <input type="email" value={email} onChange={handleEmail} placeholder="Email" className="form-control mb-1" required/>
                                    <label>Phone</label>
                                    <input type="text" placeholder="Phone no" value={phone} onChange={handlePhone} className="form-control mb-1" required />
                                    <label>Profile pic</label>
                                    <input type="file" onChange={handleUploadClick} placeholder="profile" className="form-control mb-1 mt-1" />
                                    <label>Username</label>
                                    <input type="text" value={username} onChange={handleUsername} placeholder="Username" className="form-control mb-1" required/>
                                    <label>Password</label>
                                    <input type="password" value={password} onChange={handlePassword} placeholder="New Password" className="form-control mb-1" required />

                                </div>

                                <div className="text-center">
                                    <button type="submit" className="btn btn-success text-center mt-2" onClick={() => uploadImageWithAdditionalData()} >Signup</button><br />

                                    <Link to="#">Already have an account?</Link><br />
                                    <button onClick={switchToSignin} className="btn btn-primary text-center mt-2">Signin</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
};
export default UserRegistration;

