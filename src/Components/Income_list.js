import React from "react"
import './Customers.css'

import Navbar from "./Navbar"

export default function(){
    return (
        <>
      
  
  <div className="customer-outer">

   <div className="customer">
   <div class="topnav">
  <a href="#home" class="active">Logo</a>

  <div id="myLinks">
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>

  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a>
</div>

  <div className="create-button">

  {/* <label><span> </span><input type="submit" value="+ Add Customers" /></label> */}
  <a href="./Expences" target="_blank">+ Add Customers</a>
  </div>



        <div className="table">
        <body>
    <table class="content-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>amount</th>
            <th>Date</th>
            <th>income</th>
            <th>ssss</th>
            <th>ssss</th>
            
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Domenic</td>
            <td>88,110</td>
            <td>dcode</td>
            <td>88,110</td>
            <td>dcode</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Sally</td>
            <td>72,400</td>
            <td>Students</td>
            <td>72,400</td>
            <td>Students</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Nick</td>
            <td>52,300</td>
            <td>dcode</td>
            <td>52,300</td>
            <td>dcode</td>
          </tr>
        </tbody>
        <tr>
            
            
          </tr>
       
        <tbody>
          <tr>
            <td>1</td>
            <td>Domenic</td>
            <td>88,110</td>
            <td>dcode</td>
            <td>88,110</td>
            <td>dcode</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Sally</td>
            <td>72,400</td>
            <td>Students</td>
            <td>72,400</td>
            <td>Students</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Nick</td>
            <td>52,300</td>
            <td>dcode</td>
            <td>52,300</td>
            <td>dcode</td>
          </tr>
          
        </tbody>
        
      </table>
</body>
</div>
</div>
</div>

<Navbar/>

        </>
    )
}

