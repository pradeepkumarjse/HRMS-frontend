import React, {useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure()

const CsvFileComponent =()=> {

    let history=useHistory();
const [excelfile, setexcelfile] = useState();

const uploadfile = async ()=>{
    
    const file = new FormData();

    file.append(
        "file",excelfile
      );

   //   console.log(file);
    //  console.log(excelfile);

      await  axios.post("http://localhost:4041/uploadcsvfile",file);
      toast.success('Csv File successfully upload', {autoClose:3000})
            history.push('/dashboard');   


}
    
const  onFileChange = (e) => {
    if (e.target) {
     setexcelfile(e.target.files[0]);
    }
  }

    return (
        <div>
            <div className='container'>
                    
                Please Choose Excel File : <input type="file" name='file' 
                onChange={onFileChange}
                /><br />

                <button className='btn btn-success' onClick={uploadfile}>Upload File</button>
            </div>
        </div>
    )
}
export default  CsvFileComponent;
