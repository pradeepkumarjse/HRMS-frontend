import React from "react";

import axios from "axios";
const QUIZ_API_BASE_URL="http://localhost:4041/api/v1/quiz/start";
class QuizService{

    QuizAns(id){
        return axios.post(QUIZ_API_BASE_URL+'/'+id);
    }

}

export default new  QuizService();