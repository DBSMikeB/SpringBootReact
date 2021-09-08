import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListEmployeeComponent from './components/employees/ListEmployeeComponent';
import ListPlaceComponent from './components/places/ListPlaceComponent';
import ListTodoComponent from './components/todos/ListTodoComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import CreateEmployeeComponent from './components/employees/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/employees/ViewEmployeeComponent';

import CreatePlaceComponent from './components/places/CreatePlaceComponent';
import ViewPlaceComponent from './components/places/ViewPlaceComponent';

import CreateTodoComponent from './components/todos/CreateTodoComponent';
import ViewTodoComponent from './components/todos/ViewTodoComponent';

import ViewHomeComponent from './components/Home';


function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ViewHomeComponent}></Route>
                          <Route path = "/home" component = {ViewHomeComponent}></Route>


                          <Route path = "/employees" component = {ListEmployeeComponent}></Route>
                          <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>

                          {/* <Route path = "/" exact component = {ListPlaceComponent}></Route> */}
                          <Route path = "/places" component = {ListPlaceComponent}></Route>
                          <Route path = "/add-place/:id" component = {CreatePlaceComponent}></Route>
                          <Route path = "/view-place/:id" component = {ViewPlaceComponent}></Route>

                          <Route path = "/todos" component = {ListTodoComponent}></Route>

                          <Route path = "/todos" component = {ListTodoComponent}></Route>
                          <Route path = "/add-todo/:id" component = {CreateTodoComponent}></Route>
                          <Route path = "/view-todo/:id" component = {ViewTodoComponent}></Route>

                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;
