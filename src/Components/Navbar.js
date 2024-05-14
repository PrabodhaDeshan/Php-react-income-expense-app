import React from "react";
import Login from "./Login";
import Protected from "./Protected";
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import profit from './profit.png'
import expenses from "./expenses.png";
import customer from "./customer.png";
import project from "./project.png";
import home from "./home.png";




export default function Navbar(){

    const naviget = useNavigate();
    function logoutSubmit(){
        localStorage.setItem("login", "");
        localStorage.setItem("loginStatus", "Logged out successfully!")
        naviget("/");
    }
    const user = localStorage.getItem('user');
    return <>



    {/* <div className="header">
    <button onClick={logoutSubmit}>Logout</button>
  
      
    </div> */}


  <div className="nav-outer">

  <nav className="nav">

   <div className="links">
   
<a className="links" href="./Dashboard"><img src={home} alt="Home" /> <br/>Home</a>
<a className="links" href="./Income"><img src={profit} alt="Income" />  <br/>Income</a>
<a className="links" href="./Expences"><img src={expenses} alt="Expenses" />  <br/>Expenses</a>
<a className="links" href="./Customers"><img src={customer} alt="customers" /> <br/> Customers</a>
<a className="links" href="./Projects"> <img src={project} alt="Projects" /> <br/> Projects</a>



</div>
</nav>

  </div>
      
    </>

    

}