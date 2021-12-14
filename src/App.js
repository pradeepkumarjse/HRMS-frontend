import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Showemployee from './components/Showemployee';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ListQuestionsComponent from './components/ListQuestionsComponent';
import CreateQuestionComponent from './components/CreateQuestionComponent';
import Assessment from './components/Assessment';
import User from './components/User';
import LoginPage from './components/LoginPage';
import { Dashboard } from './components/dashboard/dashboard';
import QuizSubmitResponse from './components/QuizSubmitResponse';
import LeaderBoard from './components/LeaderBoard';
import { UserDashboard } from './components/dashboard/UserDashboard';




function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/questions" component={ListQuestionsComponent} ></Route>
          <Route exact path="/add-question/:id" component={CreateQuestionComponent}></Route>
          <Route exact path="/employee" exact component={Showemployee} ></Route>
          <Route  exact path="/add-employee" component={CreateEmployeeComponent}></Route>
          <Route exact path="/upda te-employee/:id" component={UpdateEmployeeComponent}></Route>
          <Route  path="/user" exact component={User} ></Route>
          <Route path="/assessment" exact component={Assessment} ></Route>
          <Route exact path="/quiz_submit_response" component={QuizSubmitResponse} />
          <Route exact path="/leader_board" component={LeaderBoard} />
          <Route exact path="/user-dashboard" component={UserDashboard}/>


        </Switch>
      </Router>
    </div>
  );
}

export default App;