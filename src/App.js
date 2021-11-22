import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Showemployee from './component/Showemployee';
import HeaderComponent from './component/HeaderComponent';
//import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './component/CreateEmployeeComponent';
import UpdateEmployeeComponent from './component/UpdateEmployeeComponent';


function App(){
    return(

            <div>
              <Router>                
                        <HeaderComponent />
                      
                        <div className="container">
                        <Switch>  
                
                            <Route path="/" exact component={Showemployee} ></Route>
                            <Route path="/add-employee" component={CreateEmployeeComponent}></Route>
                            <Route path="/update-employee/:id" component={UpdateEmployeeComponent}></Route> 

                        </Switch>  
                        
                        </div>
                     
               </Router>
                   
            </div>
    );
}

export default App;