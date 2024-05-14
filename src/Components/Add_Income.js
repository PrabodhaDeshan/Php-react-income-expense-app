import React, { useState } from "react"
import './Expences.css'
import Navbar from "./Navbar"
import axios from 'axios';



export default function(){
  const [actype,setActype] =useState('');
  const [amount,setAmount]=useState('');
  const [date,setDate] = useState ('');
  const [time,setTime]=useState('');
  const [description,setDescription]=useState('');

  const handleSubmit=()=>{
    if(actype.length === 0){
        alert("Name has left Blank!");
      }
      else if(amount.length === 0){
        alert(" Blank!");
      }
      else if(date.length === 0){
        alert(" Blank!");
      }
      else if(time.length === 0){
        alert("Blank!");
      }
      else if(description.length === 0){
        alert("");
  
      }
      else{
        const url = 'http://localhost/Income-expense-app-React-PHP/reactapp/incomesubmit.php';
        let fData = new FormData();
        fData.append('actype', actype);
        fData.append('amount',amount);
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
   <h2>Add Income</h2>
   <form action="#" method="POST">
     
     <div class="form-group">
       <label for="category">Project:</label>
       <br/>
       <select id="category" name="category"onChange={(e) => setActype(e.target.value)} required>
         <option value="Project 1">Project 1</option>
         <option value="Project 2">Project 2</option>
         <option value="Project 3">Project 3</option>
         <option value="Project 4">Project 4</option>
         <option value="Other">Other</option>
       </select>
     </div>
   
          
    
     <div class="form-group">
       <label for="amount">Amount:</label>
     
       <br/>
       <input type="number" id="amount" name="amount" onChange={(e) => setAmount(e.target.value)} required/>
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
            <textarea id="description" name="description" onChange={(e) => setDescription(e.target.value)} rows="4" required></textarea>
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
