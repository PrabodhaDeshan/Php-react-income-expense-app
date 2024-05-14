import React from "react"
import Navbar from "./Navbar"
import './Navbar.css';
import './Income.css'
import './Expences.css'
import { useState } from 'react';
import axios from 'axios';



export default function(){
    const [name,setName] =useState('');
    const [contact,setContact]=useState('');
    const [address,setAddress] = useState ('');
    const [id_number,setId]=useState('');
    const [city,setCity]=useState('');
    const [project,setProject]=useState();
   


    const handleSubmit=()=>{
        if(name.length === 0){
            alert("Name has left Blank!");
          }
          else if(contact.length === 0){
            alert("Mobile has left Blank!");
          }
          else if(address.length === 0){
            alert("Address has left Blank!");
          }
          else if(id_number.length === 0){
            alert("ID Number has left Blank!");
          }
          else if(city.length === 0){
            alert("");
          }
        
          else if(project.length === 0){
            alert("");
          }
         
          else{
            const url = 'http://localhost/Income-expense-app-React-PHP/reactapp/formsubmit.php';
            let fData = new FormData();
            fData.append('name', name);
            fData.append('address', address);
            fData.append('contact', contact);
            fData.append('id_number', id_number);
            fData.append('city',city);
            fData.append('project',project)
            axios.post(url, fData).then(response=> alert(response.data)).catch(error=> alert(error));

            
          }
    }
    return (
      <body>
       <div className="outer">
       {/* <div className="tittle">

<h2>Add Expences</h2>

</div> */}
<div className="income-form-outer">
    <div className="header">

    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
<i class="fa fa-bars"></i>
</a>
    </div>
    <div className="income-form">
          <div className="container">
   <h2>Add Customers</h2>
   <form action="#" method="POST">
   <div class="form-group">
                <label for="name">Name:</label>
                <br/>
                <input type="text"  name="name" id="name" onChange={(e) => setName(e.target.value)} required/>
            </div>  
            <div class="form-group">
                <label for="address">Address:</label>
                <br/>
                <input type="text" id="address" name="address" onChange={(e) => setAddress(e.target.value)} required/>
            </div>
            <div class="form-group">
       <label for="name">Contact:</label>
       <br/>
       <input type="text" id="contact" name="contact" onChange={(e) => setContact(e.target.value)} pattern="[0-9]{12}" maxlength="12" placeholder="E.g. +94 77 1234567" required/>
     </div>
            <div class="form-group">
                <label for="id-number">ID Number:</label>
                <br/>
                <input type="text" id="id_number" name="id_number" onChange={(e) => setId(e.target.value)} required/>
            </div>
            <div class="form-group">
                <label for="city">City:</label>
                <br/>
                <input type="text" id="city" name="city" onChange={(e) => setCity(e.target.value)} required/>
            </div>
            <div class="form-group">
                <label for="project">Project:</label>
                <br/>
                <input type="text" id="project" name="project" onChange={(e) => setProject(e.target.value)} required/>
            </div>
                
            <input type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" name="submit" id="submit" value="Submit" onClick={handleSubmit} />
     
   </form>
   </div>
 
 </div>

  
</div>
        
       </div>
      

        <Navbar/>

       
        </body>
    )
}
