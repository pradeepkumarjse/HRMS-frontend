import axios from 'axios';

const QUESTION_API_BASE_URL = "http://localhost:4041/api/v1/questions";
class QuestionService {

    getQuestions() {
        return axios.get(QUESTION_API_BASE_URL);
    }

    createQuestion(question) {
        return axios.post(QUESTION_API_BASE_URL, question);
    }

    getQuestionById(id) {
        return axios.get(QUESTION_API_BASE_URL + '/' + id);
    }
    updateQuestion(question, id) {
        return axios.put(QUESTION_API_BASE_URL + '/' + id, question);
    }
    deleteQuestion(id) {
        return axios.delete(QUESTION_API_BASE_URL + '/' + id);
    }

}

export default new QuestionService();
