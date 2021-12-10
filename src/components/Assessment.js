import React, { useState, useEffect } from "react";

import axios from "axios";
import { useLocation } from "react-router";
import QuizService from "../services/QuizService";
import CountDownTimer from "./CountDownTimer ";
import QuestionService from "../services/QuestionService";
import { fetchUserData } from '../api/authenticationService';
import HeaderComponent from "./HeaderComponent";


const Assessment = (props) => {

const hoursMinSecs = { hours: 0, minutes: 0, seconds: 15 }

  const [questions, setQuestions] = useState([]);
  const [id, setId] = useState(0);
  const [id1, setId1] = useState(1);
  const [radio, setRadio] = useState(true);
  const [ans1 ,setans]=useState([]);
  const [userData, setData] = useState({});

  const [q1, setQ1] = useState([]);

  const[ans,setAns]=useState(0);

  localStorage.setItem('question',JSON.stringify(questions))

  let location = useLocation();

  useEffect(() => {
    fetchUserData().then((response) => {
      setData(response.data);
    }).catch((e) => {
      localStorage.clear();
      props.history.push('/');
    })
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

  // questions.questions?(questions.questions[id].question):''
 const  updateQuestion = (e) => {
    e.preventDefault();
    setId(id+1);

    questions.questions[id].choose=ans;
 setans({ans1:questions.questions[id].choose})
  

  }

  const submitQuiz=(e)=>{
    e.preventDefault();
    questions.questions[id].choose=ans;
    QuizService.submitQuiz(questions);
//    console.log('localStorage',localStorage)
     props.history.push("/quiz_submit_response")

   
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

  const changequestionno1=(e)=>{
   if(e.target){
     setId(0);
   }
  }

  const changequestionno2=(e)=>{
    if(e.target){
      setId(1);
    }
   }

   const changequestionno3=(e)=>{
    if(e.target){
      setId(2);
    }
   }

   const changequestionno4=(e)=>{
    if(e.target){
      setId(3);
    }
   }

   const changequestionno5=(e)=>{
    if(e.target){
      setId(4);
    }
   }

   const changequestionno6=(e)=>{
    if(e.target){
      setId(5);
    }
   }

   const changequestionno7=(e)=>{
    if(e.target){
      setId(6);
    }
   }
   const changequestionno8=(e)=>{
    if(e.target){
      setId(7);
    }
   }

   const option1=()=>{
    console.log(ans)
     setAns(1);
       }


   const option2=()=>{
   
    setAns(2);
   
    }
  
    const option3=()=>{
      setAns(3);
 
      }

  const option4=()=>{
    setAns(4);
 
}


  return (



    <div>
    <HeaderComponent />
      <div className="container">

      Welcome, {location.state}

      <div className="" style={{ color: "red", fontSize: "30px" }} >
        <CountDownTimer hoursMinSecs={hoursMinSecs} questions={questions} />
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
                                
                           <div class="card-header">Q.{id+1} { questions.questions?(questions.questions[id].question):''}</div> 
                           <div class="card-body">
                            
                           <input type="radio" name="options" id="option1" onClick={option1} value="1"  /> {questions.questions?(questions.questions[id].op1):''}<br />
                           <input type="radio" name="options" id="option2" onClick={option2} value="2" /> {questions.questions?(questions.questions[id].op2):''} <br />
                           <input type="radio" name="options" id="option3" onClick={option3} value="3"/> {questions.questions?(questions.questions[id].op3):''} <br />
                           <input type="radio" name="options" id="option4" onClick={option4} value="4"/> {questions.questions?(questions.questions[id].op4):''} <br />
                           
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
            {(id==0)
        ?<> <button className="btn " onClick={updateQuestion} style={{marginLeft:"200px",backgroundColor:"#0dcaf0"}}>Save & Next</button>
        <button className="btn " onClick={quit} style={{float:"right" ,backgroundColor:"#0dcaf0"}} >Quit</button>
        
        </>
        :  <> 
        <button className="btn " onClick={() => { setId(id - 1);  console.log(id); }} style={{backgroundColor:"#0dcaf0"}}>Previous</button> 
        { (id==7)?<button className="btn " onClick={quit} style={{float:"right" ,backgroundColor:"#0dcaf0"}} >Quit</button>
            :<>
            <button className="btn " onClick={updateQuestion} style={{marginLeft:"200px",backgroundColor:"#0dcaf0"}}>Save & Next</button>
        <button className="btn " onClick={quit} style={{float:"right" ,backgroundColor:"#0dcaf0"}} >Quit</button>
            </>

        }
        
        
        </>
      }
      </div>
            
          <div className="container mt-3 mb-3 text-center">
            {(id==7)? <a href="/" class="btn btn-info " onClick={submitQuiz}>Submit Test</a>
            :''
            }
           
          </div>

        </div>

      </div>
      <div className="col-md-3 ">
   
   <div className="mt-3 text-center" style={{border:"2px solid pink"}} >
     <div className="p-3">
     <button class="btn btn-success btn-lg" value="1" onClick={changequestionno1} style={{borderRadius:"50%"}}>1</button>
     <button class="btn btn-success  btn-lg" value="2" onClick={changequestionno2} style={{borderRadius:"50%",marginLeft:"10px"}}>2</button>
     <button class="btn btn-success  btn-lg" value="3" onClick={changequestionno3} style={{borderRadius:"50%",marginLeft:"10px"}}>3</button>
     <button class="btn btn-success btn-lg" value="4" onClick={changequestionno4} style={{borderRadius:"50%",marginLeft:"10px"}}>4</button>
     </div>
     <div className="p-3">
     <button class="btn btn-success  btn-lg" value="5" onClick={changequestionno5} style={{borderRadius:"50%",marginLeft:"1px"}}>5</button>
     <button class="btn btn-success  btn-lg" value="6" onClick={changequestionno6} style={{borderRadius:"50%",marginLeft:"10px"}}>6</button>
     <button class="btn btn-success  btn-lg" value="7" onClick={changequestionno7} style={{borderRadius:"50%",marginLeft:"10px"}}>7</button>
     <button class="btn btn-success  btn-lg" value="8" onClick={changequestionno8} style={{borderRadius:"50%",marginLeft:"10px"}}>8</button>
     </div>

    
   </div>

</div>

    </div>
   
    </div>
    </div>
  );
};
export default Assessment;