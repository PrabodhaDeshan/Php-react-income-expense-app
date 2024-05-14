import React from "react"
import './Expences.css'
import Navbar from "./Navbar"
import './Income.css'


export default function(){
    return (

      <body>
        
        
       <div className="outer">




       {/* <div className="tittle">

<h2>Add Expences</h2>

</div> */}




<div className="income-form-outer">


    <div className="header">



    </div>
    <div className="income-form">
      

          <div className="container">
   <h2>Add Expenses</h2>
   <form action="#" method="POST">
     <div class="form-group">
       <label for="name">Name:</label>
       <input type="text" id="name" name="name" required/>
     </div>

     <div class="form-group">
       <label for="name">Contact:</label>
       <input type="text" id="name" name="name" required/>
     </div>
     
     <div class="form-group">
       <label for="amount">Amount:</label>
       <input type="number" id="amount" name="amount" required/>
     </div>
     
     <div class="form-group">
       <label for="date">Date:</label>
       <input type="date" id="date" name="date" required/>
     </div>
     <div class="form-group">
       <label for="time">Time:</label>
       <input type="time" id="time" name="time" required/>
     </div>
     <div class="form-group">
       <label for="category">Category:</label>
       <select id="category" name="category" required>
         <option value="">Select a category</option>
         <option value="Food">Food</option>
         <option value="Transportation">Transportation</option>
         <option value="Entertainment">Entertainment</option>
         <option value="Shopping">Shopping</option>
         <option value="Other">Other</option>
       </select>
     </div>
     <button type="submit">Submit</button>
   </form>
   </div>
 
 </div>

  
</div>
        
       </div>
      

        <Navbar/>

       
        </body>
    )
}
