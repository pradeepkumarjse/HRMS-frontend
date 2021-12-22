import React, { Component } from 'react';
import QuestionService from '../services/QuestionService';
//import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HeaderComponent from './HeaderComponent';




class CreateQuestionComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {

      // step 2
      id: this.props.match.params.id,
      question: '',
      op1: '',
      op2: '',
      op3: '',
      op4: '',
      ans_option: '',
      picPath:'',
      imageData:null,
      questionerror: '',
      op1error: '',
      op2error: '',
      op3error: '',
      op4error: '',
      ans_optionerror: '',


    }

    this.ChangeQuestionHandler = this.ChangeQuestionHandler.bind(this);
    this.ChangeOption1HandlerHandler = this.ChangeOption1HandlerHandler.bind(this);
    this.ChangeOption2HandlerHandler = this.ChangeOption2HandlerHandler.bind(this);
    this.ChangeOption3HandlerHandler = this.ChangeOption3HandlerHandler.bind(this);
    this.ChangeOption4HandlerHandler = this.ChangeOption4HandlerHandler.bind(this);
    this.ChangeAnswerOptionHandlerHandler = this.ChangeAnswerOptionHandlerHandler.bind(this);
    this.saveOrUpdateQuestion = this.saveOrUpdateQuestion.bind(this);
    //this.ChangeFileHandler=this.ChangeFileHandler(this);

  }

  valid() {

    if (this.state.question == '' && this.state.op1 == '' && this.state.op2 == ''
      && this.state.op3 == '' && this.state.op4 == '' && this.state.ans_option == '') {
      this.setState({
        questionerror: "field not empty", op1error: "field not empty", op2error: "field not empty"
        , op3error: "field not empty", op4error: "field not empty", ans_optionerror: "field not empty"
      })
    }

    else if (this.state.question == '') {
      this.setState({ questionerror: "Question is required" })
    }

    else if (this.state.op1 == '') {
      this.setState({ op1error: "required" })
    }

    else if (this.state.op2 == '') {
      this.setState({ op2error: "required" })
    }

    else if (this.state.op3 == '') {
      this.setState({ op3error: "required" })
    }

    else if (this.state.op4 == '') {
      this.setState({ op4error: "required" })
    }

    else if (this.state.ans_option == '') {
      this.setState({ ans_optionerror: "required" })
    }
    else {
      return true
    }

  }


  //  step 3
  componentDidMount() {
    //step 4
    if (this.state.id === '_add') {
      return
    }
    else {
      QuestionService.getQuestionById(this.state.id).then((res) => {

        let question = res.data;
        this.setState({

          question: question.question,
          op1: question.op1,
          op2: question.op2,
          op3: question.op3,
          op4: question.op4,
          ans_option: question.ans_option,
          picPath:question.picPath
        });
      });
    }


  }
  cancel(e) {
    e.preventDefault();
    this.props.history.push('/questions');
  }

  saveOrUpdateQuestion = (e) => {

    e.preventDefault();

    let question = { question: this.state.question, op1: this.state.op1, op2: this.state.op2, op3: this.state.op3, op4: this.state.op4, ans_option: this.state.ans_option,picPath:this.state.picPath };
    console.log('questions=>' + JSON.stringify(question));

    let imageData={ imageData :this.state.imageData};

   

    {
      this.setState({
        questionerror: "", op1error: "", op2error: ""
        , op3error: "", op4error: "", ans_optionerror: ""
      })
    }

    // step 5
    if (this.state.id === '_add') {

      if (this.valid()) {
        const formData=new FormData();
        formData.append('imageFile',imageData);
        formData.append("imageName","question");
        console.log(formData);
        QuestionService.createQuestion(question,formData).then(
          console.log(question,formData),
          res => {
 
            this.props.history.push('/questions');
          },
          error =>{
              console.log("question not created")
          }

        );


      }


    }
    else {

      let question = { id: this.state.id, question: this.state.question, op1: this.state.op1, op2: this.state.op2, op3: this.state.op3, op4: this.state.op4, ans_option: this.state.ans_option,picPath:this.state.picPath};

      QuestionService.updateQuestion(question, this.state.id).then(res => {

        this.props.history.push('/questions');
      });

    }
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
  
  

  ChangeFileHandler =(event)=>{
    this.setState({imageData:event.target.files[0]});
 //let file=event.target.files[0];
  //const formData=new FormData();
//formData.append('imageFile',file);
 //this.setState({imageData:file});
 //console.log(event.target.files[0]);
  }


  getTitle() {
    if (this.state.id === '_add') {
      return <h3 className="text-center">Add Question</h3>;
    }
    else {
      return <h3 className="text-center">Update Question</h3>;
    }
  }

  render() {
    return (
      <div>
        <HeaderComponent />
        <div className="conatiner">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              {
                this.getTitle()
              }
              <div className="card-body">

                <form>
                  <div className="form-group">
                    <label>Question</label>
                    <input placeholder="question" name="question" className="form-control"
                      value={this.state.question} onChange={this.ChangeQuestionHandler}
                    />
                    <span style={{ color: "red" }}>{this.state.questionerror}</span>
                  </div>
                  <div className="form-group mt-2">
                    <label>Option1</label>
                    <input placeholder="option1" name="op1" className="form-control"
                      value={this.state.op1} onChange={this.ChangeOption1HandlerHandler} />
                    <span style={{ color: "red" }}>{this.state.op1error}</span>
                  </div>
                  <div className="form-group mt-2">
                    <label>Option2</label>
                    <input placeholder="option2" name="op2" className="form-control"
                      value={this.state.op2} onChange={this.ChangeOption2HandlerHandler} />
                    <span style={{ color: "red" }}>{this.state.op2error}</span>
                  </div>
                  <div className="form-group mt-2">
                    <label>Option3</label>
                    <input placeholder="option3" name="op3" className="form-control"
                      value={this.state.op3} onChange={this.ChangeOption3HandlerHandler} />
                    <span style={{ color: "red" }}>{this.state.op3error}</span>
                  </div>
                  <div className="form-group mt-2">
                    <label>Option4</label>
                    <input placeholder="option4" name="op4" className="form-control"
                      value={this.state.op4} onChange={this.ChangeOption4HandlerHandler} />
                    <span style={{ color: "red" }}>{this.state.op4error}</span>
                  </div>
                  <div className="form-group mt-2">
                    <label>Answer Option</label>
                    <input placeholder="answer option" name="ans_option" className="form-control"
                      value={this.state.ans_option} onChange={this.ChangeAnswerOptionHandlerHandler} />
                    <span style={{ color: "red" }}>{this.state.ans_optionerror}</span>
                  </div>

                  <div className='form-group mt-2'>
                    <label>Select file</label>
                    <input type="file" className='form-control'  name="picPath"  onChange={this.ChangeFileHandler}/>
                  </div>


                  <div style={{ marginTop: "10px" }} >
                    <button className="btn btn-success" onClick={this.saveOrUpdateQuestion}>Save</button>
                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateQuestionComponent;

