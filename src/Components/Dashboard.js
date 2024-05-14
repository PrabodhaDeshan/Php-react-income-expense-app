import React, { useRef } from "react";
import './Dashboard.css';
import Navbar from "./Navbar"
import Expences from "./Expences"
import Income from "./Income"
import Home from "./Home"
import { Form, useNavigate } from 'react-router-dom';
import Customers from "./Customers";
import {FaBars,FaTimes} from "react-icons/fa";
import income from "./income.png";
import spending from "./spending.png";
import cs from "./cs.png";
import planning from "./planning.png";
import Navigation from "./Header";


export default function Dashboard() {


    const navRef =useRef();

    const showNavbar =()=>{
        navRef.current.classList.toggle("responsive_nav");
    }
      
    let component   
    switch (window.location.pathname){
       

        case "/":
            component  =<Dashboard/>
            break 
        case "/Income":
            component = <Income/>
            break
         case "/Expences":
            component  = <Expences/>
            break
         case "/Customers":
            component  = <Customers/>
            case "/Home":
                component  = <Home/>
    }

    return(

<>


      <div className="home-outer">
        <div className="home">
        <div className="head">
            <Navigation/>
 
 </div>

              <div className="h1">
              <h1>WELCOME TO INCOME AND EXPENSE APP</h1>
              </div>
        
       


        {/* <div className="dash">
               
               <div className="icons">
               <img src={income} alt="Flowers in Chania"/>

               </div>
               <div className="icons">
               <img src={spending} alt="Flowers in Chania"/>
                
               </div>
               <div className="icons">
               <img src={cs} alt="Flowers in Chania"/>
                
               </div>
               <div className="icons">
               <img src={planning } alt="Flowers in Chania"/>
                
               </div>

        </div> */}


        </div>
      
      
      </div>

  

       <Navbar/>
       { component}
</>

    )
}