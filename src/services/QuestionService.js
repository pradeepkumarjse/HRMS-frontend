import axios from 'axios';

const QUESTION_API_BASE_URL = "http://localhost:4041/api/v1/questions";
const config={headers:{ 'content-type': 'multipart/form-data'}};
class QuestionService {

    getQuestions() {
        return axios.get(QUESTION_API_BASE_URL);
    }

    createQuestion(question,formData) {
        console.log(question,formData)
        return axios.post(QUESTION_API_BASE_URL, question,formData,config);
          
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
