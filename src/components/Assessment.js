import React, { useState, useEffect } from "react";

import axios from "axios";
import { useLocation } from "react-router";
import QuizService from "../services/QuizService";
import CountDownTimer from "./CountDownTimer ";
import { fetchUserData } from '../api/authenticationService';
import HeaderComponent from "./HeaderComponent";



const Assessment = (props) => {

  const hoursMinSecs = { hours: 0, minutes: 9, seconds: 59 }

  const [questions, setQuestions] = useState([]);
 
  const [userData, setData] = useState({});

 
   


  let location = useLocation();

  useEffect(() => {

    fetchUserData().then((response) => {
      setData(response.data);
    }).catch((e) => {
      localStorage.clear();
      props.history.push('/');
    })
    QuizService.getAllQuiz(location.state).then((response) => {
      console.log(response.data);
       setQuestions(response.data);

    },
      (error) => {
        console.log(error);

      }
    )

  }, [1])

  const getQuizQuestions = () => {
    // QuizService.getAllQuiz(location.state).then((response) => {
    //   console.log(response.data);
    //   setQuestions(response.data);

    // },
    //   (error) => {
    //     console.log(error);

    //   }
    
  }


  

  const quit = (e) => {  

    localStorage.clear();
    
    props.history.push("/");
  }
  

  // console.log(Object.keys(questions))
  return (



    <div>
      <HeaderComponent />

      Welcome, {location.state}

      <div className="" style={{ color: "red", fontSize: "30px" }} >
        <CountDownTimer hoursMinSecs={hoursMinSecs} />
      </div>


      <div className="row">
        <div className="col-md-6 offset-3">
          <div className=" mt-4">
          {
            <div>

            </div>


          }

             {
              questions.questions?(questions.questions.map((item,index) => (
                <div key={item.id}>

                     <div className="card-header">{item.question} </div>

                      <div className="card-body">
                         <input type="radio" name="" value="1" />{item.op1}  <br/>


                      <input type="radio" name=" " value="2" />{item.op2}{index} <br/>

                      <input type="radio" name="" value="3" />{item.op3}{index}<br/>
                      <input type="radio" name="" value="4" />{item.op4}{index}<br/>

                </div>

                    <input type="hidden" name={questions[index]} value={item.id} />
                    <input type="hidden" name={questions[index]} value={item.question} />
                    <input type="hidden" name={questions[index]} value={item.ans_option} />
                </div>

              ))):''
              
              } 
            <button type="submit" class="btn btn-success d-block mx-auto mt-4">Submit Answer</button>








            {/* 
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
            }   */}








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

            {/* <div className="mt-5">
            <button className="btn " onClick={() => { setId(id - 1);  console.log(id); }} style={{backgroundColor:"#0dcaf0"}}>Previous</button>
            <button className="btn " onClick={() => { setId(id + 1);  console.log(id); }} style={{marginLeft:"200px",backgroundColor:"#0dcaf0"}}>Next</button>
            <button className="btn " onClick={() => { setId(id + 1);  console.log(id); }} style={{float:"right" ,backgroundColor:"#0dcaf0"}} onClick={quit}>Quit</button>
            </div> */}
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