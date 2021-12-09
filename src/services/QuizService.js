import React from "react";

import axios from "axios";
const QUIZ_API_BASE_URL = "http://localhost:4041/api/v1/quiz";
class QuizService {

    getAllQuiz(id) {
        return axios.post(QUIZ_API_BASE_URL + '/start/' + id);
    }

    submitQuiz(questions) {
        return axios.post(QUIZ_API_BASE_URL + '/submit', questions);

    }

}

export default new QuizService();