import React, { useState, useEffect  } from "react";
import './Login.css';
 
import { useNavigate } from 'react-router-dom';
 
export default function Login() {
    const naviget = useNavigate();
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
 
    useEffect(() => {
        let login = localStorage.getItem("login");
        if(login){
            naviget("/dashboard");
        }
        let loginStatus = localStorage.getItem("loginStatus");
        if(loginStatus){
            setError(loginStatus);
            setTimeout(function(){
                localStorage.clear();
                window.location.reload();
            }, 3000);
        }
        setTimeout(function(){
            setMsg("");
        }, 5000);
    }, [msg]);
 
    const handleInputChange = (e, type) => {
        switch(type){
            case "user":
                setError("");
                setUser(e.target.value);
                if(e.target.value === ""){
                    setError("Username has left blank");
                }
                break;
            case "pass":
                setError("");
                setPass(e.target.value);
                if(e.target.value === ""){
                    setError("Password has left blank");
                }
                break;
            default:
        }
    }
 
    function loginSubmit(){
        if(user !== "" && pass != ""){
            var url = "http://localhost/reactapp/login.php";
            var headers = {
                "Accept": "application/json",
                "Content-type": "application/json"
            };
            var Data = {
                user: user,
                pass: pass
            };
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response) => response.json())
            .then((response) => {
                console.log(response);
                if(response[0].result === "Invalid username!" || response[0].result === "Invalid password!"){
                    setError(response[0].result);
                }
                else{
                    setMsg(response[0].result);
                    setTimeout(function(){
                        localStorage.setItem("login", true);
                        localStorage.setItem('user', user);
                        naviget("/dashboard");
                    }, 5000);
                }
            }).catch((err) => {
                setError(err);
                console.log(err);
            })
        }
        else{
            setError("All field are required!")
        }
    }
    return(
        <>
       
             
                <div className="card1" >             
                        <p>
                            {
                                error !== "" ?
                                <div style={{color: '#842029'}}><b>{error}</b></div> :
                                <div style={{color: '#badbcc'}}><b>{msg}</b></div>
                            }

                        </p>

                        <div className="lmd">
                        <div className="loginouter">
                            <i className="" />
                            <h2>Login</h2>
                        </div>

                       

                        <h5 className="">Username</h5>
                      
                            <input 
                                type="text"
                                id="username"
                                className="form-control form-control-lg"
                                value={user}
                                onChange={(e) => handleInputChange(e, "user")}
                            />
                            <label className="form-label" htmlFor="username">Password</label>
                        
                        <div className="">
                            <input 
                                type="password"
                                id="pass"
                                className=""
                                value={pass}
                                onChange={(e) => handleInputChange(e, "pass")}
                            />
                                 
                  <div className="btnn">
                 
                  <input 
    type="submit"
    defaultValue="Login"
    className=""
    onClick={loginSubmit}
    style={{
        width: '50%',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#4CAF50',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    }}
/>


                        </div>
                      
                         </div>
                        </div>
                        
                    </div>
                    
               
        </>
    )
}