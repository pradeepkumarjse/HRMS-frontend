import React, { Component } from 'react';
import QuestionService from '../services/QuestionService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class UpdateQuestionComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: this.props.match.params.id,
      question: '',
      op1: '',
      op2: '',
      op3: '',
      op4: '',
      ans_option: ''
    }

    this.ChangeQuestionHandler = this.ChangeQuestionHandler.bind(this);
    this.ChangeOption1HandlerHandler = this.ChangeOption1HandlerHandler.bind(this);
    this.ChangeOption2HandlerHandler = this.ChangeOption2HandlerHandler.bind(this);
    this.ChangeOption3HandlerHandler = this.ChangeOption3HandlerHandler.bind(this);
    this.ChangeOption4HandlerHandler = this.ChangeOption4HandlerHandler.bind(this);
    this.ChangeAnswerOptionHandlerHandler = this.ChangeAnswerOptionHandlerHandler.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
  }


  componentDidMount() {
    QuestionService.getQuestionById(this.state.id).then((res) => {
      let question = res.data;
      this.setState({

        question: question.question,
        op1: question.op1,
        op2: question.op2,
        op3: question.op3,
        op4: question.op4,
        ans_option: question.ans_option
      });
    });
  }

  updateQuestion = (e) => {
    e.preventDefault();
    let question = { id: this.state.id, question: this.state.question, op1: this.state.op1, op2: this.state.op2, op3: this.state.op3, op4: this.state.op4, ans_option: this.state.ans_option };
    console.log('Question=>' + JSON.stringify(question));
    QuestionService.updateQuestion(question, this.state.id).then(res => {

      this.props.history.push('/questions');
    });


  }
  cancel() {
    this.props.history.push('/questions');
  }

  ChangeQuestionHandler = (event) => {
    this.setState({ question: event.target.value });
  }
  ChangeOption1HandlerHandler = (event) => {
    this.setState({ op1: event.target.value });
  }
  ChangeOption2HandlerHandler = (event) => {
    this.setState({ op2: event.target.value });
  }
  ChangeOption3HandlerHandler = (event) => {
    this.setState({ op3: event.target.value });
  }
  ChangeOption4HandlerHandler = (event) => {
    this.setState({ op4: event.target.value });
  }

  ChangeAnswerOptionHandlerHandler = (event) => {
    this.setState({ ans_option: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="conatiner">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Update Question</h3>
              <div className="card-body">

                <form>
                  <div className="form-group">
                    <label>Question</label>
                    <input placeholder="question" name="question" className="form-control"
                      value={this.state.question} onChange={this.ChangeQuestionHandler} />
                  </div>
                  <div className="form-group mt-2">
                    <label>Option1</label>
                    <input placeholder="option1" name="op1" className="form-control"
                      value={this.state.op1} onChange={this.ChangeOption1HandlerHandler} />
                  </div>
                  <div className="form-group mt-2">
                    <label>Option2</label>
                    <input placeholder="option2" name="op2" className="form-control"
                      value={this.state.op2} onChange={this.ChangeOption2HandlerHandler} />
                  </div>
                  <div className="form-group mt-2">
                    <label>Option3</label>
                    <input placeholder="option3" name="op3" className="form-control"
                      value={this.state.op3} onChange={this.ChangeOption3HandlerHandler} />
                  </div>
                  <div className="form-group mt-2">
                    <label>Option4</label>
                    <input placeholder="option4" name="op4" className="form-control"
                      value={this.state.op4} onChange={this.ChangeOption4HandlerHandler} />
                  </div>
                  <div className="form-group mt-2">
                    <label>Answer Option</label>
                    <input placeholder="answer option" name="ans_option" className="form-control"
                      value={this.state.ans_option} onChange={this.ChangeAnswerOptionHandlerHandler} />
                  </div>

                  <button className="btn btn-success" onClick={this.updateQuestion}>Save</button>
                  <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>cancel</button>

                </form>

              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default UpdateQuestionComponent;