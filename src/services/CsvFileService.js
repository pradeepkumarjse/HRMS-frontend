import React from 'react';
import axios from 'axios';

const CSVURL = "http://localhost:4041/realcoder/api/upload";

export default function CsvFileService() 
{

    uploadfile(file) 
    {
        return axios.post( CSVURL,file);
    }

    getcsvfilelist() 
    {

        return axios.get(CSVURL);
    }


}
