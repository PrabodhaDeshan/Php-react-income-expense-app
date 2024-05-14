
import React, { Component } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Protected from './Components/Protected';
import Dashboard from './Components/Dashboard';
import './App.css';
import Income from './Components/Income';
import Expences from './Components/Expences';
import Customers from './Components/Customers';
import Add_Customers from './Components/Add_Customers';
import Add_Expenses from './Components/Add_Expenses';
import Add_Income from './Components/Add_Income';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Add_project from './Components/Add_project';
import Login from './Components/Login';


function App() {
  return (

  
   
   <BrowserRouter>
   <Routes>
    <Route path='/'element={<Login/>}/>
    
    <Route path="/dashboard" element={<Protected Component={Dashboard} />} />
    <Route path="/Income" element={<Protected Component={Income} />} />
    <Route path="/Expences" element={<Protected Component={Expences} />} />
    <Route path="/Customers" element={<Protected Component={Customers} />} />
    <Route path="/Add_Customers" element={<Protected Component={Add_Customers} />} />
    <Route path="/Add_Expenses" element={<Protected Component={Add_Expenses} />} />
    <Route path="/Add_Income" element={<Protected Component={Add_Income} />} />
    <Route path="/Add_project" element={<Protected Component={Add_project} />} />
    <Route path="/Home" element={<Protected Component={Home} />} />
    <Route path="/Projects" element={<Protected Component={Projects} />} />
    <Route path="/Login" element={<Protected Component={Login} />} />
   </Routes>
 
   </BrowserRouter>


  );
}

export default App;
