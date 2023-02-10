import React from 'react';
import Button from "@mui/material/Button";
import { useState } from 'react';
import {useNavigate} from "react-router-dom";
const Login=()=> {
    const [username, setusername] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [showError,setShowError]=useState(false)
    const navigate=useNavigate()
    const handleSubmit = () => {
      if(!username || !phone || !email) {
        setShowError(true)
        return;
      }
      else{
        localStorage.setItem("username",JSON.stringify({username,phone,email}))
        setusername('');
        setphone('');
        setemail('');
        setShowError(false)
        navigate("/MainPage")
      }
    };
  return (
    <div className="login_container">
      <h1>Login</h1>
      <span>
      {showError?<p className='error'>**Please fill all the details!!**</p>:null}
      </span>
      <form>
        <div className='inputs'>
        <div className="form-group">
          <label htmlFor="username">Username: </label>
          <input
            className='input_tag'
            type="text"
            id="username"
            placeholder=' Enter Username'
            value={username}
            onChange={(event) =>
                setusername(event.target.value)
              }
            required
          />
          </div>
          <div className="form-group">
          <label htmlFor="phone">Phone Number: </label>
          <input
            className='input_tag'
            type="tel"
            id="phone"
            value={phone}
            placeholder=' Enter Phone Number'
            required
            onChange={(event) =>
                setphone(event.target.value)
              }
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-Mail: </label>
          <input
          className='input_tag'
            type="email"
            id="email"
            value={email}
            placeholder=' Enter Email'
            onChange={(event) =>
                setemail(event.target.value)
              }
              required
          />
        </div>
        </div>
      </form>
          
    
        <Button variant="contained" onClick={handleSubmit}>Submit</Button>
       
    </div>
  
  );
}
export default Login;
