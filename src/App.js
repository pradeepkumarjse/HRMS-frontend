import React from 'react';
import './App.css';
import { BrowserRouter as Router,Link,Route,Switch } from 'react-router-dom';

import Showemployee from './components/Showemployee';
import HeaderComponent from './components/HeaderComponent';
//import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

import ListQuestionsComponent from './components/ListQuestionsComponent';
import CreateQuestionComponent from './components/CreateQuestionComponent';
import Assessment from './components/Assessment';

function App(){
    return(

            <div>
              <Router>    
                                 
                        <HeaderComponent />

                         <div>
                           <Link to="/questions"><h3>Question crud</h3></Link>
                           <Link to="/employee"><h3>Employee</h3></Link>
                           <Link to="/start"><h3>Start assessment</h3></Link>
                        </div>
                        <div className="container">

                         <div className="row m-0">
                             <div className="col-md-2 mt-2">
                             <nav className="list-group">
                            <Link to="" className="btn  list-group-item list-group-item-action list-group-item-dark ">
                            <i class="fa fa-user" aria-hidden="true"></i> Admin</Link> 
                            <Link to="/employee" className="btn list-group-item list-group-item-action ">
                            Employee</Link>
                            <Link to="/questions" className="btn list-group-item list-group-item-action ">Question</Link>
                            <Link to="assessment" className="btn list-group-item list-group-item-action ">Start Accessment</Link>
                            </nav>
                             </div> 
                             <div className="col-md-10">

                             <div className="container">

                        <Switch>  
                        
                             <Route path="/startAssessment" component={ListQuestionsComponent}></Route>

                            <Route path="/questions" component={ListQuestionsComponent}></Route>
                            <Route path="/add-question/:id" component={CreateQuestionComponent}></Route> 
 
                            <Route path="/employee" exact component={Showemployee} ></Route>
                            <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
                            <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route> 

                            <Route path="/assessment" exact component={Assessment} ></Route>

                        </Switch>  
                        
                       
                        
                     
               </Router>
                   
            </div>
    );
}

export default App;
