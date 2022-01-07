import React,{useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import classNames from 'classnames';
// use classnames to select text box when error occur
toast.configure();

function CreateEmployeeComponent(){

const {register,handleSubmit, formState: { errors }}=useForm();

const [name,setName]=useState();
const [address,setAddress]=useState();
const [date,setDate]=useState();
const [email,setEmail]=useState();
const [mobile,setMobile]=useState();
const [image,setImage]=useState();
const [userid,setUserid]=useState();
const [password,setPassword]=useState();
const [gender,setGender]=useState();

let history=useHistory();

const onSubmit= ()=>
        {
        
        // for image code

        const file  = new FormData();
        file.append("file",image);

        let emp = {
            e_name: name, address: address, e_date: date,
            e_email: email, e_gender: gender, e_mobile: mobile, e_userid: userid,
            e_password:password
        };

        const emp1=JSON.stringify(emp);
        const  blob= new Blob([emp1], {
            type: 'application/json'
          });

     file.append("emp",blob);

     console.log(file);

    axios.post("http://localhost:4041/realcoder/api/employees",file);

     toast.success('Save successfully', {autoClose:3000});
        history.push('/employee');
     
         //  console.log(data);
          //  let myemail={"to":email,"subject":subject,"message":message}
 
         //   axios.post("http://localhost:4041/sendemail",myemail);
        //    toast.success('email send successfully', {autoClose:3000})
        //    history.push('/dashboard');
        }

const namechange={...register("name", 
{ required: "name is required",
minLength: { value:2, message:"minimum 2 character"}
})};

const addresschange={...register("address", 
{ required: "address is required"}
)};

const datechange={...register("date", 
{ required: "date is required"}
)};

const emailchange={...register("email", 
{ required: "email is required"}
)};

const mobilechange={...register("mobile", 
{ required: "mobile is required",
minLength: { value:10, message:"minimum 10 digit"}, 
maxLength: { value:10, message:"maximum 10 digit"}
})};


const imagechange={...register("file", 
{ required: "image is required"}
)};

const useridchange={...register("userid", 
{ required: "user id is required",
minLength: { value:5, message:"user id should be more than 5"}
})};

const passwordchange={...register("password", 
{ required: "password  is required",
minLength: { value:5, message:"password should be more than 5"}
})};

const genderchange={...register("gender", 
{ required: "gender is required"}
)};

//  const subjectchange={...register("subject", 
//  { required: "subject is required", 
//  minLength: { value:2, message:"minimum 2 character"}, 
//  maxLength: { value:10, message:"maximum 10 character"} 
// })};

const onnamechange=(e)=>{
    //  console.log(e.target.value);
      setName(e.target.value);
}

const onaddresschange=(e)=>{
  //  console.log(e.target.value);
    setAddress(e.target.value);
}
const ondatechange=(e)=>{
    setDate(e.target.value);
}
const onemailchange=(e)=>{
    setEmail(e.target.value);
}

const onmobilechange=(e)=>{
    setMobile(e.target.value);
}

const onimagechange=(e)=>{
    setImage(e.target.files[0]);
}

const onuseridchange=(e)=>{
   setUserid(e.target.value);
}

const onpasswordchange=(e)=>{
    setPassword(e.target.value);
}

const ongenderchange=(e)=>{
    setGender(e.target.value);
}



    return (
        <div>
          <div className='container'>

            <div className='row'>

                <div className='col-md-6 offset-md-3 mt-5'>
                <div className='card shadow p-3 '>

                    <h2 className='text-center'>Add Employee</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>

                            <div class="form-group">
                                <label for="exampleFormControlInput1">Name:</label>
                                <input type="text" name='name' className={classNames("form-control",{"is-invalid ":errors.name})} id="name" placeholder="name" 
                                 {...namechange}
                                onChange={e=>{namechange.onChange(e);
                                onnamechange(e);
                                }}/>
                              {errors.name && (<div className='invalid-feedback'>{errors.name.message}</div>)}
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlInput1">Address:</label>
                                <input type="text" name='address' className={classNames("form-control",{"is-invalid ":errors.address})} id="address" placeholder="address" 
                                 {...addresschange}
                                onChange={e=>{addresschange.onChange(e);
                                onaddresschange(e);
                                }}/>
                              {errors.address && (<div className='invalid-feedback'>{errors.address.message}</div>)}
                            </div>


                            <div class="form-group">
                                <label for="exampleFormControlInput1">Date:</label>
                                <input type="date" name='date' className={classNames("form-control",{"is-invalid ":errors.date})} id="date" placeholder="date" 
                                 {...datechange}
                                onChange={e=>{datechange.onChange(e);
                                ondatechange(e);
                                }}/>
                              {errors.date && (<div className='invalid-feedback'>{errors.date.message}</div>)}
                            </div>
                    
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Email:</label>
                                <input type="email"  name='email'
                                 className={classNames("form-control",{"is-invalid ":errors.email})} id="email" placeholder="enter email address" 
                                {...emailchange}
                                onChange={e=>{emailchange.onChange(e);
                                onemailchange(e);
                                }}/>
                              {errors.email && (<div className='invalid-feedback'>{errors.email.message}</div>)}
                            </div>
 
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Mobile</label>
                                <input type="text" name='mobile' className={classNames("form-control",{"is-invalid ":errors.mobile})} id="mobile" placeholder="mobile" 
                                 {...mobilechange}
                                onChange={e=>{mobilechange.onChange(e);
                                onmobilechange(e);
                                }}/>
                              {errors.mobile && (<div className='invalid-feedback'>{errors.mobile.message}</div>)}
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlInput1">Image</label>
                                <input type="file" name='file' className={classNames("form-control",{"is-invalid ":errors.file})} id="file" 
                                 {...imagechange}
                                onChange={e=>{imagechange.onChange(e);
                                onimagechange(e);
                                }}/>
                              {errors.file && (<div className='invalid-feedback'>{errors.file.message}</div>)}
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlInput1">Gender</label><br/>
                                <input type="radio" name='gender'  className={classNames("",{"is-invalid ":errors.gender})} id="gender" 
                                 {...genderchange}
                                onChange={e=>{genderchange.onChange(e);
                                ongenderchange(e);
                                }}/>Male

                                <input type="radio" name='gender'  className={classNames("",{"is-invalid ":errors.gender})} id="gender" 
                                 {...genderchange}
                                onChange={e=>{genderchange.onChange(e);
                                ongenderchange(e);
                                }}/>Female
                              {errors.gender && (<div className='invalid-feedback'>{errors.gender.message}</div>)}
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlInput1">User Id</label>
                                <input type="text" name='userid' className={classNames("form-control",{"is-invalid ":errors.userid})} id="userid" placeholder="userid"
                                 {...useridchange}
                                onChange={e=>{useridchange.onChange(e);
                                onuseridchange(e);
                                }}/>
                              {errors.userid && (<div className='invalid-feedback'>{errors.userid.message}</div>)}
                            </div>

                            <div class="form-group">
                                <label for="exampleFormControlInput1">Password</label>
                                <input type="text" name='password' className={classNames("form-control",{"is-invalid ":errors.password})} id="password" placeholder="password"
                                 {...passwordchange}
                                onChange={e=>{passwordchange.onChange(e);
                                onpasswordchange(e);
                                }}/>
                              {errors.password && (<div className='invalid-feedback'>{errors.password.message}</div>)}
                            </div> 
                            <br />

                            <button type='submit' class="btn btn-primary mb-2">Save</button>
                    </form>
                    </div>
                </div>
            </div>

          </div>
        </div>
            )
}

export default CreateEmployeeComponent;
