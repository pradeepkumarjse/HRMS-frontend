import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Showemployee from './components/Showemployee';
import HeaderComponent from './components/HeaderComponent';
//import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
<<<<<<< HEAD
=======
import ListQuestionsComponent from './components/ListQuestionsComponent';
import FooterComponent from './components/FooterComponent';
import CreateQuestionComponent from './components/CreateQuestionComponent';
import UpdateQuestionComponent from './components/UpdateQuestionComponent';

>>>>>>> a2d46205663014733b938abb11ec9f343bf7b687


function App(){
    return(

            <div>
              <Router>                
                        <HeaderComponent />
                      
                        <div className="container">
                        <Switch>  
                
                            <Route path="/" exact component={ListQuestionsComponent} ></Route>
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