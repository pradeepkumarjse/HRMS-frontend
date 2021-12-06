import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Showemployee from './components/Showemployee';


import HeaderComponent from './components/HeaderComponent';

import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';

import ListQuestionsComponent from './components/ListQuestionsComponent';
import CreateQuestionComponent from './components/CreateQuestionComponent';
import Assessment from './components/Assessment';

import User from './components/User';
import LoginPage from './components/LoginPage';
import { Dashboard } from './components/dashboard/dashboard';


function App() {
  return (
    <div>



      <Router>


        {/*                       
                          <li>
                            <button onClick={loginWithPopup}>Login</button>
                          </li>
                          <li>
                          */}
        {/* <button  onClick={logout}>logout</button>

                          
                         
                       <h3>user is :{isAuthenticated?"user is logged in":"user is not logged in"}</h3>
                        {/* { */}
        {/* isAuthenticated && (
                          <pre style={{textAlign:'start'}}>       
                             {JSON.stringify(user,null,2)}
                          </pre>)
                        }  */}



        <Switch>


          <Route path="/questions" component={ListQuestionsComponent} ></Route>
          <Route path="/add-question/:id" component={CreateQuestionComponent}></Route>

          <Route path="/employee" exact component={Showemployee} ></Route>
          <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
          <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route>

          <Route path="/user" exact component={User} ></Route>
          <Route path="/assessment" exact component={Assessment} ></Route>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/dashboard" component={Dashboard} />

        </Switch>




      </Router>

    </div>
  );
}

export default App;
