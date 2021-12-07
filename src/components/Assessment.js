   
import React, { useState, useEffect } from "react";

import axios from "axios";
import { useLocation } from "react-router";
import QuizService from "../services/QuizService";
import CountDownTimer from "./CountDownTimer ";


const Assessment = (props) => {

  const hoursMinSecs = { hours: 0, minutes: 9, seconds: 59 }

  const [questions, setQuestions] = useState([]);
  const [id, setId] = useState(0);
  const [id1, setId1] = useState(1);
  const [radio, setRadio] = useState(true);

  const [q1, setQ1] = useState([]);


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

  function updateProps(e) {
    if (e.target) {
      setId1(e.target.value);
      return;
    }
    setId1(e);

  }

  console.log(questions.questions)
  console.log(questions)

const  quit=(e)=>{

      localStorage.clear();
      props.history.push("/");
  }

  return (



    <div>

      Welcome, {location.state}

      <div className="" style={{ color: "red", fontSize: "30px" }} >
        <CountDownTimer hoursMinSecs={hoursMinSecs} />
      </div>


      <div className="row">
        <div className="col-md-6 offset-3">
          <div className=" mt-4">

            {/* {
                   questions.questions.map((q)=>(
                      <div>                            
                       <div class="card-header">{q.question}</div> 
                       <div class="card-body">                        
                       <input type="radio" name={questions.questions?(questions.questions[id].choose):''} id="option1" value={q.op1}  /> {q.op1}<br />
                       <input type="radio" name={questions.questions?(questions.questions[id].choose):''} id="option2" value={q.op2} /> {q.op2} <br />
                       <input type="radio" name="options" id="option3" value={q.op3}/> {q.op3} <br />
                       <input type="radio" name="options" id="option4" value={q.op4}/> {q.op4} <br />
                       
                        </div>
                        
                        </div>
                    ))} 
                    */}







            {            
                               
                            <div >
                                
                           <div class="card-header">{ questions.questions?(questions.questions[id].question):''}</div> 
                           <div class="card-body">
                            
                           <input type="radio" name="options" id="option1" value={questions.questions?(questions.questions[id].op1):''}  /> {questions.questions?(questions.questions[id].op1):''}<br />
                           <input type="radio" name="options" id="option2" value={questions.questions?(questions.questions[id].op2):''} /> {questions.questions?(questions.questions[id].op2):''} <br />
                           <input type="radio" name="options" id="option3" value={questions.questions?(questions.questions[id].op3):''}/> {questions.questions?(questions.questions[id].op3):''} <br />
                           <input type="radio" name="options" id="option4" value={questions.questions?(questions.questions[id].op4):''}/> {questions.questions?(questions.questions[id].op4):''} <br />
                           
                            </div>
                            
                            </div>
            }  




           

            

            {/* {            
            {            
                     
                               <div className="mt-3">
                                   
                              <div class="card-header">{ questions.questions?(questions.questions[id].question):''}</div> 
                              <div class="card-body" onChange={ (event)=>{ /*if(event.target.checked) {event.target.checked=false; console.log(event.target.checked)}}}>
                              
                              <input type="radio"   id="op1" name={questions.questions?(questions.questions[id].op1):''} value="1" checked onChange={(event)=>{}} /> {questions.questions?(questions.questions[id].op1):''}<br />
                              <input type="radio"  id="op2" name={questions.questions?(questions.questions[id].op1):''}  value="2" checked onChange={(event)=>{} }/> {questions.questions?(questions.questions[id].op2):''} <br />
                              <input type="radio" id="op3" name={questions.questions?(questions.questions[id].op1):''}  value="3" checked onChange={(event)=>{}} /> {questions.questions?(questions.questions[id].op3):''} <br />
                              <input type="radio" id="op4" name={questions.questions?(questions.questions[id].op1):''}  value="4" checked onChange={(event)=>{}}/> {questions.questions?(questions.questions[id].op4):''} <br />
                              <div class="card-body">
                               
                              <input type="radio" name={questions.questions?(questions.questions[id].op1):''} value="1" /> {questions.questions?(questions.questions[id].op1):''}<br />
                              <input type="radio" name={questions.questions?(questions.questions[id].op1):''}  value="2"/> {questions.questions?(questions.questions[id].op2):''} <br />
                              <input type="radio" name={questions.questions?(questions.questions[id].op1):''}  value="3"/> {questions.questions?(questions.questions[id].op3):''} <br />
                              <input type="radio" name={questions.questions?(questions.questions[id].op1):''}  value="4"/> {questions.questions?(questions.questions[id].op4):''} <br />
                              
                               </div>
                               
                               </div>          }              */}

            <div className="mt-5">
            <button className="btn " onClick={() => { setId(id - 1);  console.log(id); }} style={{backgroundColor:"#0dcaf0"}}>Previous</button>
            <button className="btn " onClick={() => { setId(id + 1);  console.log(id); }} style={{marginLeft:"200px",backgroundColor:"#0dcaf0"}}>Next</button>
            <button className="btn " onClick={() => { setId(id + 1);  console.log(id); }} style={{float:"right" ,backgroundColor:"#0dcaf0"}} onClick={quit}>Quit</button>
            </div>
          {/* <div className="container mt-3 mb-3 text-center">

            <a href="/" class="btn btn-info ">Submit Test</a>
          </div> */}

        </div>

      </div>


    </div>
    </div>
  );
};
export default Assessment;

