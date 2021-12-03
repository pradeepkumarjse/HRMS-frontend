import React, { useState, useEffect } from "react";

import axios from "axios";
import { useLocation } from "react-router";
import QuizService from "../services/QuizService";
import CountDownTimer from "./CountDownTimer ";
  

const Assessment = (props) => {

  const hoursMinSecs = {hours:0, minutes: 9, seconds: 59}

  const [questions, setQuestions] = useState([]);
  const [id, setId] = useState(0);
  const [id1,setId1]=useState(1);
 

  let location = useLocation();

  useEffect(() => {
    getQuizQuestions();
    
    
  }, [])

  const getQuizQuestions = () => {
    QuizService.getAllQuiz(location.state).then((response) => {
      setQuestions(response.data);
      
    },
      (error) => {
        console.log(error);

      }
    )
  }

  function updateProps(e){
    if(e.target){
       setId1(e.target.value);
       return;
    }
    setId1(e);
    
}
  
  
  return (

    

    <div>
      
      Welcome, {location.state}
      
<div className="text-right "style={{color: "red",fontSize:"30px"}} >
<CountDownTimer hoursMinSecs={hoursMinSecs}/>
</div>
     

      <div className="row">
        <div className="col-md-6 offset-2">
          <div className=" mt-5">
        
          {/* {
           questions.questions.map((q)=>(
                      <div>                            
                       <div class="card-header">{q.question}</div> 
                       <div class="card-body">                        
                       <input type="radio" name="options" id="option1" value={q.op1}  /> {q.op1}<br />
                       <input type="radio" name="options" id="option2" value={q.op2} /> {q.op2} <br />
                       <input type="radio" name="options" id="option3" value={q.op3}/> {q.op3} <br />
                       <input type="radio" name="options" id="option4" value={q.op4}/> {q.op4} <br />
                       
                        </div>
                        
                        </div>
                    ))}  */}
                   

                                      





             {/* {            
                               
                            <div>
                                
                           <div class="card-header">{ questions.questions?(questions.questions[id].question):''}</div> 
                           <div class="card-body">
                            
                           <input type="radio" name="options" id="option1" value={questions.questions?(questions.questions[id].op1):''}  /> {questions.questions?(questions.questions[id].op1):''}<br />
                           <input type="radio" name="options" id="option2" value={questions.questions?(questions.questions[id].op2):''} /> {questions.questions?(questions.questions[id].op2):''} <br />
                           <input type="radio" name="options" id="option3" value={questions.questions?(questions.questions[id].op3):''}/> {questions.questions?(questions.questions[id].op3):''} <br />
                           <input type="radio" name="options" id="option4" value={questions.questions?(questions.questions[id].op4):''}/> {questions.questions?(questions.questions[id].op4):''} <br />
                           
                            </div>
                            
                            </div>
            }   */}


            {            
                               
                               <div className="mt-3">
                                   
                              <div class="card-header">{ questions.questions?(questions.questions[id].question):''}</div> 
                              <div class="card-body">
                               
                              <input type="radio" name={questions.questions?(questions.questions[id].op1):''} value="1" /> {questions.questions?(questions.questions[id].op1):''}<br />
                              <input type="radio" name={questions.questions?(questions.questions[id].op1):''}  value="2"/> {questions.questions?(questions.questions[id].op2):''} <br />
                              <input type="radio" name={questions.questions?(questions.questions[id].op1):''}  value="3"/> {questions.questions?(questions.questions[id].op3):''} <br />
                              <input type="radio" name={questions.questions?(questions.questions[id].op1):''}  value="4"/> {questions.questions?(questions.questions[id].op4):''} <br />
                              
                               </div>
                               
                               </div>
               }  

  
            <button className="btn btn-primary" onClick={() => { setId(id + 1);  }}>Next</button>

          </div>

            <div className="container mt-3 mb-3 text-center">
              
                <a href="/" class="btn btn-info ">Submit Test</a>
            </div>
    
        </div>
     
      </div>

      
    </div>
  );
};
export default Assessment;
