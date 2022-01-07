import React,{useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useForm } from "react-hook-form";
import classNames from 'classnames';
// use classnames to select text box when error occur
toast.configure();

function EmailComponent(){

const {register,handleSubmit, formState: { errors }}=useForm();

const [email,setEmail]=useState();
const [subject,setSubject]=useState();
const [message,setMessage]=useState();

let history=useHistory();

const onSubmit=()=>
        {
         //  console.log(data);
            let myemail={"to":email,"subject":subject,"message":message}
 
            axios.post("http://localhost:4041/sendemail",myemail);
            toast.success('email send successfully', {autoClose:3000})
            history.push('/dashboard');
        }

const emailchange={...register("email", 
{ required: "email is required"}
)};

 const subjectchange={...register("subject", 
 { required: "subject is required", 
 minLength: { value:2, message:"minimum 2 character"}, 
 maxLength: { value:10, message:"maximum 10 character"} 
})};

 const messagechange={...register("message", 
 { required: "message is required", 
 minLength: {value:4, message:"minimum 4 character"}, 
 maxLength: { value:100,message:"maximum 100 character"} 
})}

const onemailchange=(e)=>{
  //  console.log(e.target.value);
    setEmail(e.target.value);
}
const onsubjectchange=(e)=>{
    setSubject(e.target.value);
}
const onmessagechange=(e)=>{
    setMessage(e.target.value);
}

    return (
        <div>
          <div className='container'>

            <div className='row'>

                <div className='col-md-4 offset-4 mt-5'>
                <div className='card shadow p-3'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">To:</label>
                                <input type="email"  name='email'
                                 className={classNames("form-control",{"is-invalid ":errors.email})} id="email" placeholder="enter email address" 
                                {...emailchange}
                                onChange={e=>{emailchange.onChange(e);
                                onemailchange(e);
                                }}/>
                              {errors.email && (<div className='invalid-feedback'>{errors.email.message}</div>)}
                            </div>
 
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Subject:</label>
                                <input type="text" name='subject' className={classNames("form-control",{"is-invalid ":errors.subject})} id="subject" placeholder="subject" 
                                 {...subjectchange}
                                onChange={e=>{subjectchange.onChange(e);
                                onsubjectchange(e);
                                }}/>
                              {errors.subject && (<div className='invalid-feedback'>{errors.subject.message}</div>)}
                              </div>
  
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Message</label>
                                <textarea  name='message' className={classNames("form-control",{"is-invalid ":errors.message})}  id="message" rows="3" 
                                  {...messagechange}
                                onChange={e=>{messagechange.onChange(e);
                                onmessagechange(e);
                                }} />
                              {errors.message && (<div className='invalid-feedback'>{errors.message.message}</div>)}
                            
                            </div><br />

                            <button type='submit' class="btn btn-primary mb-2">Send Mail</button>
                    </form>
                    </div>
                </div>
            </div>

          </div>
        </div>
            )
}

export default EmailComponent;
