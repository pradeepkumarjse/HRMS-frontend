import React,{ useState, useEffect } from "react";

import axios from "axios";

import QuestionService from "../services/QuestionService";

import QuizService from "../services/QuizService";

const Assessment = () =>{

    const [question, setQuestion] = useState([]);
    const [quizans, setQuizans] = useState([]);

        useEffect(()=>{

            getAllQuestion();

            // QuizAns();
           
        },[])

        // changeOption=(event)=>{
        //     this.setQuizans({name:event.target.value});
        // }

        // function to call server
        const getAllQuestion=()=>{
            
            QuestionService.getQuestions().then(
                (response)=>{
                        console.log(response);
                        console.log(response.data);
                        setQuestion(response.data);
                },
                (error)=>{
                        console.log(error);
                });
        };

        // const QuizAns=()=>{
            
        //         QuizService. QuizAns().then(
        //             (response)=>{
        //                     console.log(response);
        //                     console.log(response.data);
        //                     setQuestion(response.data);
        //             },
        //             (error)=>{
        //                     console.log(error);
        //             });
        //     };



    return(
        <div>
            <div className="row">
                <div className="col-md-6 offset-2">
                <div className=" mt-5">

                    {
                    question.map((q)=>(
                        <div>
                            
                       <div class="card-header">{q.question}</div> 
                       <div class="card-body">
                        
                       <input type="radio" name="options" id="option1" value={q.op1}  /> {q.op1}<br />
                       <input type="radio" name="options" id="option2" value={q.op2} /> {q.op2} <br />
                       <input type="radio" name="options" id="option3" value={q.op3}/> {q.op3} <br />
                       <input type="radio" name="options" id="option4" value={q.op4}/> {q.op4} <br />
                       
                        </div>
                        
                        </div>
                    ))}
                   
                       
                </div>

                <div className="container mt-3 mb-3">
                      
                       <a href="#" class="btn btn-info ">Submit Test</a>
                       </div>
                </div>

             </div>   
        </div>
    );
};
export default Assessment;