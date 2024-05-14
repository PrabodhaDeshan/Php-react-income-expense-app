import React, { useEffect, useState } from "react";
import axios from "axios";
import './Customers.css';
import './Expences.css';
import './Income.css';
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";

export default function() {
  const [income_rs, setIncome_rs] = useState([]);
  const [checkedBoxes, setCheckedBoxes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost/reactapp/customer.php/');
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
    { key: 'name', label: 'name' },
    { key: 'address', label: 'address' },
    { key: 'contact', label: 'contact' },
    { key: 'id_number', label: 'id_number' },
    { key: 'city', label: 'city' },
    { key: 'project', label: 'project' },
  ];

  return (
    <>
     <div className="outer2">
     <div className="inner">
     <div className="head">

<div class="topnav">
<a href="#home" class="active"></a>

<div id="myLinks">
<a href="#news">News</a>
<a href="#contact">Contact</a>
<a href="#about">About</a>
</div>

<a href="javascript:void(0);" class="icon" onclick="myFunction()">
<i class="fa fa-bars"></i>
</a>
</div>
 
 </div>
     <div className="tittle">
     
     <h2>Customers</h2>
     
      
    </div>
     <div className="search">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

    </div>
      <div className="container">

        <div className="table-outer">

        
     
        <div id="msg"></div>
       
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
 

  {item.name} <space/>{item.address} <space/>{item.contact} <space/>{item.id_number}<space/> {item.city} <space/>{item.time} 
  <space/>{item.project}
  </div>
</div>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" className="btn btn-danger" onClick={deleteIncome}>Delete Selected </button>
        </div>
        </div>
       
        <div className="submit-button-outer">

<form action="./Add_Customers">
<input type="submit" value="+" />
</form>
</div>
        </div>
        
      </div>
      <Navbar/>
    </>
  );
}
