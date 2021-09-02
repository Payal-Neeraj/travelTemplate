import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router';
import Navbar from './components/Navbar';
import Service from './Service';
import Home from './Home';
import Stats from './components/Stats';
import Footer from './components/Footer'; 



const App = () =>{
  return(
    <>
    <Navbar />
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/service' component={Service} />
      <Redirect to="/" />
    </Switch> 
    <Stats />
    <Footer />
       
    </>
  );
};

export default App;
