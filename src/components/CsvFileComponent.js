import React, {useState} from 'react'
import axios from 'axios';
import HeaderComponent from "./HeaderComponent";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";


const CsvFileComponent =()=> {

const [excelfile, setexcelfile] = useState();

let history=useHistory();
const uploadfile = async ()=>{

  
    const file = new FormData();

    file.append(
        "file",excelfile
      );

     
      await  axios.post("http://localhost:4041/uploadcsvfile",file).then(
        res => {
                 
            toast.success("File uploaded successfully."); 

        },
        error =>{
            toast.error("file not uploaded");          
        }

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
