import React,{ useState, useEffect } from "react";

import axios from "axios";

import QuestionService from "../services/QuestionService";

const Assessment = () =>{

    const [question, setQuestion] = useState([]);

        useEffect(()=>{

            getAllQuestion();
           
        },[])

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

    return(
        <div>
            <div className="row">
                <div className="col-md-6 offset-2">
                <div className="card mt-5">

                    {
                    question.map((q)=>(
                        <div>
                       <div class="card-header">{q.question}</div> 
                       <div class="card-body">
                        
                       <input type="radio" name="options" id="option1" /> {q.op1}<br />
                       <input type="radio" name="options" id="option2" />{q.op2} <br />
                       <input type="radio" name="options" id="option3" />{q.op3} <br />
                       <input type="radio" name="options" id="option4" />{q.op4} <br />
                       
                        </div>
                        </div>
                    ))}
                   
                       
                </div>

                <div className="container mt-3">
                       <a href="#" class="btn btn-info ">Previous</a>
                       <a href="#" class="btn btn-info float-right">Save & Next</a>
                       </div>
                </div>

             </div>   
        </div>
    );
};
export default Assessment;