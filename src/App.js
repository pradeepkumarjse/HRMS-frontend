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




function App(){
    return(

            <div>
              <Router>                
                        <HeaderComponent />
                      

                        <Link to="/questions"><h1>Question crud</h1></Link>
                        <Link to="/employee"><h1>Employee</h1></Link>
                        
                        <div className="container">
                        <Switch>  
                        
                             
                            <Route path="/questions" component={ListQuestionsComponent}></Route>
                            <Route path="/add-question/:id" component={CreateQuestionComponent}></Route> 
 
                           
                           
                            <Route path="/employee" exact component={Showemployee} ></Route>
                            <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
                            <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route> 

                        </Switch>  
                        
                        </div>
                     
               </Router>
                   
            </div>
    );
}

export default App;
