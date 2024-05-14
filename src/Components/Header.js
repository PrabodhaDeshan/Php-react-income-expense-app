import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';
function Navigation() {
  const [isLinksVisible, setLinksVisible] = useState(false);
  

  const toggleLinks = () => {
    setLinksVisible(!isLinksVisible);
  };

const naviget = useNavigate();
    function logoutSubmit(){
        localStorage.setItem("login", "");
        localStorage.setItem("loginStatus", "Logged out successfully!")
        naviget("/");
    }
    const user = localStorage.getItem('user');
  
  


  return (
    <div className="topnav">
      <a href="#home" className="active"></a>
      {/* Navigation links */}
      <div id="myLinks" style={{ display: isLinksVisible ? 'block' : 'none' }}>
        <a href="./Income">Income</a>
        <a href="./Expences">Expenses</a>
        <a href="./Customers">Customers</a>
        <a href="./Projects">Projects</a>
        <div className='but'>
        <button onClick={logoutSubmit}>Logout</button> 
        </div>
      
        <div>
        </div>
      </div>
      {/* "Hamburger menu" / "Bar icon" to toggle the navigation links */}
      <a href="javascript:void(0);" className="icon" onClick={toggleLinks}>
    
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}

export default Navigation;
