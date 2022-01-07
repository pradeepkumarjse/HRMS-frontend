import React, {useState} from 'react'
<<<<<<< HEAD
import axios from 'axios';
import HeaderComponent from "./HeaderComponent";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

=======
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()
>>>>>>> 34a66db9fc6167df2a72981b2e227b2cb8b23b7c

const CsvFileComponent =()=> {

    let history=useHistory();
const [excelfile, setexcelfile] = useState();

let history=useHistory();
const uploadfile = async ()=>{
<<<<<<< HEAD

  
=======
    
>>>>>>> 34a66db9fc6167df2a72981b2e227b2cb8b23b7c
    const file = new FormData();

    file.append(
        "file",excelfile
      );

<<<<<<< HEAD
     
      await  axios.post("http://localhost:4041/uploadcsvfile",file).then(
        res => {
                 
            toast.success("File uploaded successfully."); 

        },
        error =>{
            toast.error("file not uploaded");          
        }
=======
   //   console.log(file);
    //  console.log(excelfile);

      await  axios.post("http://localhost:4041/uploadcsvfile",file);
      toast.success('Csv File successfully upload', {autoClose:3000})
            history.push('/dashboard');   
>>>>>>> 34a66db9fc6167df2a72981b2e227b2cb8b23b7c

    );

      history.push("/dashboard");
       

}
    
const  onFileChange = (e) => {
    if (e.target) {
     setexcelfile(e.target.files[0]);
    }
  }

    return (
        <div>
         <HeaderComponent/>
            <div className='container'>
            <div className="row mt-5 mb-5"> 
            <div className="col-md-6 offset-3">
 
                Please Choose Excel File : <input type="file" name='file' 
                onChange={onFileChange}
                /><br />

            </div>
            <button className='btn btn-success mt-5' onClick={uploadfile}>Upload File</button>
</div>
            </div>
        </div>
    )
}
export default  CsvFileComponent;
