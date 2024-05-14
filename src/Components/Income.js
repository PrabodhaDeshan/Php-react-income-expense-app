import React, { useEffect, useState } from "react";
import axios from "axios";
import './Customers.css';
import './Expences.css';
import './Income.css';
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import Navigation from "./Header";


export default function() {
  const [income_rs, setIncome_rs] = useState([]);
  const [checkedBoxes, setCheckedBoxes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost/reactapp/income.php/');
      setIncome_rs(response.data);
    } catch (error) {
      console.error("Error Reading data ", error);
    }
  };

  const deleteIncome = (event) => {
    event.preventDefault();
    if (window.confirm('Are you sure you want to delete the selected one?')) {
      alert(checkedBoxes + " Successfully Deleted");
    }
  };

  const toggleCheckbox = (e, item) => {
    if (e.target.checked) {
      setCheckedBoxes([...checkedBoxes, item.id]);
    } else {
      const items = checkedBoxes.filter(id => id !== item.id);
      setCheckedBoxes(items);
    }
    console.log(checkedBoxes);
  };

  const headers = [
    { key: 'id', label: 'ID' },
    { key: 'actype', label: 'Account type' },
    { key: 'amount', label: 'Amount' },
    { key: 'date', label: 'Date' },
    { key: 'time', label: 'Time' },
    { key: 'description', label: 'Description' }
  ];

  return (

    <>
     <div className="outer2">

     <div className="inner">
     <div className="head">

  <Navigation/>
      
      </div>
     <div className="tittle">
     
     <h2>Income</h2>
      
    </div>
     <div className="search">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

    </div>
      <div className="container">
     
        <div id="msg"></div>
      
        {/* <table className="table table-bordered table-striped"> */}
        <table className="table table-borderless">
          
          {/* <thead>
            <br/>
            <tr>
              {headers.map(h => (
                <th key={h.key}>{h.label}</th>
              ))}
            </tr>
          </thead> */}
          <tbody>
            {income_rs.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    className="selectsingle"
                    value={item.id}
                    checked={checkedBoxes.includes(item.id)}
                    onChange={(e) => toggleCheckbox(e, item)}
                  />
                  {item.id}
                </td>
                <div class="card">
  <div class="card-body">
    <div className="card-top">
    <td style={{ color: 'rgb(9, 83, 255)', fontWeight: 700 } }> {item.actype} </td>  
    <br/>
    <td style={{ color: 'grey', fontWeight: 100 } }>{item.description}</td>
    
   
         
    </div>
    <div className="card-bottom">
    <td style={{ color: 'green', fontWeight: 700 } }>Rs. {item.amount}/=</td>
      {item.date} 
    </div>
 
  </div>
</div>
              </tr>
            ))}
          </tbody>

        </table>
        
        <button type="button" className="btn btn-danger" onClick={deleteIncome}>Delete Selected </button>
  
        <div className="submit-button-outer">
<form action="./Add_Income">
<input type="submit" value="+" />
</form>
</div>
        </div>
        </div>
         
     </div>
      <Navbar/>
    </>
  );
}
