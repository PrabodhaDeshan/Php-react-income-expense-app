
import React, { useState } from "react"
import './Expences.css'
import Navbar from "./Navbar"
import './Income.css'
import axios from 'axios';


export default function(){

  const [name,setName]=useState('');
  const [category,setCategory]=useState('');
  const [date,setDate]=useState('');
  const [time,setTime]=useState('');
  const [description,setDescription]=useState('');
   
  
  const handleSubmit=()=>{
    if(name.length === 0){
        alert("Project name has left Blank!");
      }
      else if(category.length === 0){
        alert(" Blank!");
      }
      else if(date.length === 0){
        alert("Blank!");
      }
      else if(time.length === 0){
        alert("Blank!");
      }
      else if(description.length === 0){
        alert("");
  
      }
      else{
        const url = 'http://localhost/Income-expense-app-React-PHP/reactapp/projectsubmit.php';
        let fData = new FormData();

        fData.append('name',name);
        fData.append('category',category);
        fData.append('date',date);
        fData.append('time',time);
        fData.append('description',description);
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
   <h2>Add Projects</h2>
   <form action="#" method="POST">
     
     <div class="form-group">
                <label for="name">Project Name:</label>
                <br/>
                <input type="text"  name="name" id="name" onChange={(e) => setName(e.target.value)} required/>
            </div>  

     <div class="form-group">
       <label for="category">Customer Name:</label>
       <br/>
       <select id="category" name="category" onChange={(e) => setCategory(e.target.value)} required>
         <option value="">Select Customer</option>
         <option value="Food">customer 1</option>
         <option value="Transportation">customer 2</option>
         <option value="Entertainment">customer 3</option>
         <option value="Other">Other</option>
       </select>
     </div>
     
     
     <div class="form-group">
       <label for="date">Date:</label>
       <br/>
       <input type="date" id="date" name="date" onChange={(e) => setDate(e.target.value)} required/>
     </div>
     <div class="form-group">
       <label for="time">Time:</label>
       <br/>
       <input type="time" id="time" name="time" onChange={(e) => setTime(e.target.value)} required/>
     </div>
     <div class="form-group">
            <label for="description">Description:</label>
            <br/>
            <textarea id="description" name="description" rows="4" onChange={(e) => setDescription(e.target.value)} required></textarea>
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
