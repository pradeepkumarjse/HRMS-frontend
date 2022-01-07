import {UPLOAD_IMAGE} from './types';
import axios from 'axios';

export const uploadImage= (imageData) =>async dispatch =>{
    if(imageData.entries().next().value[1]!==null){
        const response=await axios.post(
            axios.defaults.baseURL+`/api/v1/user/register`,imageData,
            {
            onUploadProgress:progressEvent =>{
                console.log("uploading : "+((progressEvent.loaded/progressEvent.total)*100).toString()+"%")
            }
        });

        dispatch({
            type:uploadImage,
            payload:response.data
        })
    }
}