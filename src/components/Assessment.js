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
  return (



    <div>

      Welcome, {location.state}

      <div className="text-right " style={{ color: "red", fontSize: "30px" }} >
        <CountDownTimer hoursMinSecs={hoursMinSecs} />
      </div>


      <div className="row">
        <div className="col-md-6 offset-2">
          <div className=" mt-5">

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


            <div class="container-fluid" style={{ marginTop: "20px" }}>
              <div class="row">
                <div>
                  <button class="button" value="1" onClick={(e) => { updateProps(e) }}>01</button>
                  <button class="button button3" value="2" onClick={(e) => { updateProps(e) }}>02</button>
                  <button class="button button3" value="3" onClick={(e) => { updateProps(e) }}>03</button>
                  <button class="button button4" value="4" onClick={(e) => { updateProps(e) }}>04</button>
                  <button class="button button5" value="5" onClick={(e) => { updateProps(e) }}>05</button>
                  <button class="button button1" value="6" onClick={(e) => { updateProps(e) }}>06</button>
                  <button class="button button2" value="7" onClick={(e) => { updateProps(e) }}>07</button>
                  <button class="button button3" value="8" onClick={(e) => { updateProps(e) }}>08</button>
                  <button class="button button4" value="9" onClick={(e) => { updateProps(e) }}>09</button>
                  <button class="button button5" value="10" onClick={(e) => { updateProps(e) }}>10</button>


                </div>
              </div>
            </div>


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

            <button className="btn btn-primary" onClick={() => { setId(id + 1); console.log(id); }}>Next</button>


            <button className="btn btn-primary" onClick={() => { setId(id + 1); }}>Next</button>

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
