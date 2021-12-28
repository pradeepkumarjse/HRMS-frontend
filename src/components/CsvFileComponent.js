import React, {useState} from 'react'
import axios from 'axios';

const CsvFileComponent =()=> {

const [excelfile, setexcelfile] = useState();

const uploadfile = async ()=>{

    console.log("file uploading  in process..");
  
    const file = new FormData();

    file.append(
        "file",excelfile
      );

      console.log(file);
      console.log(excelfile);

      await  axios.post("http://localhost:4041/uploadcsvfile",file);    


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
