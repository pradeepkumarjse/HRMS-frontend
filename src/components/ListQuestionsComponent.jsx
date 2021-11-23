import React, { Component } from 'react';
import {ToastContainer, toast } from 'react-toastify';
import QuestionService from '../services/QuestionService';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

class ListQuestionsComponent extends Component {
    
    constructor(props){
        super(props)
        this.state={
            questions:[]
        }

        this.addQuestion=this.addQuestion.bind(this);
        this.editQuestion=this.editQuestion.bind(this);
        this.deleteQuestion=this.deleteQuestion.bind(this);
    }
    
    addQuestion(){
         this.props.history.push('/add-question/_add');
         
    }
    editQuestion(id){
        this.props.history.push(`/add-question/${id}`);

    }

    deleteQuestion(id){
           
            QuestionService.deleteQuestion(id).then(
                res=>{
                    toast.error("question deleted successfully")

                    this.setState({questions:this.state.questions.filter(question => question.id !==id)})
                }
            );
       }

    componentDidMount(){
        QuestionService.getQuestions().then(
            (res)=>{
                   this.setState({questions:res.data});
            }
        );
    }   

    render() {
        return (
            <div>
                <h1 className="text-center">Questions</h1>
              
              <div>
                  <button  className="btn btn-primary" onClick={this.addQuestion}>Add Question</button>
              </div>
           
                <div className="row mt-3">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>   
                              <td><b>Qid</b></td>                          
                              <td><b>Question</b></td>
                              <td><b>Option1</b></td>
                              <td><b>Option2</b></td>
                              <td><b>Option3</b></td>
                              <td><b>Option4</b></td>
                              <td><b>Answer Option</b></td>
                              <td><b>Actions</b></td>
                            </tr>
                        </thead>

                        <tbody>
                                {
                                    this.state.questions.map(
                                        question=>
                                        <tr key={question.id}>
                                            <td>{question.id}</td>
                                            <td>{question.question}</td>
                                            <td>{question.op1}</td>
                                            <td>{question.op2}</td>
                                            <td>{question.op3}</td>
                                            <td>{question.op4}</td>
                                            <td>{question.ans_option}</td>
                                            <td>
                                               <button onClick={()=>this.editQuestion(question.id)} className="btn btn-info">Update</button>
                                               <button style={{marginTop:"10px" ,marginLeft:"1px"}} onClick={()=>this.deleteQuestion(question.id)} className="btn btn-danger">Delete</button>

                                               <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
                              
                                            </td>
                                            
                                        </tr>

                                    )
                                }
                             
                        </tbody>

                    </table>

                </div>



            </div>
        );
    }
}

export default ListQuestionsComponent;