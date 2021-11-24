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
                         <div>
                           <Link to="/questions"><h3>Question crud</h3></Link>
                           <Link to="/employee"><h3>Employee</h3></Link>
                        </div>
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
