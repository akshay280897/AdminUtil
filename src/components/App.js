import React from 'react';
import {Route,Switch} from 'react-router-dom';
import './App.css';
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from './PageNotFound';
import Courses from './courses/Courses';

function App() {
  return (
    <div className="container-fluid">
      <Header/>
      <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/about" component={AboutPage}></Route>
      <Route path="/courses" component={Courses}></Route>
      <Route component={PageNotFound}/>
      </Switch>
    </div>
  );
}

export default App;
