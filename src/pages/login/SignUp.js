import React from 'react'
import { Button, TextField } from "@mui/material";

import { Link,useNavigate } from "react-router-dom";
import './SignUp.scss'
import handshake from '../../images/handshake.jpg'


const SignUp = () => {
  const navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/');
  }

  return (
    <div>
      <div className='main-signup'>
        <div>
            <img src={handshake} alt="" />
        </div>
        <div className='login-main'>
            <div className='login'>  
                <h1>Lets get started</h1>
                <p>or <Link to="/login"><span className='link'>Login to your account</span></Link></p>
                <form action="">
                {/* <input placeholder='Name' type="text" name="" id="" /> */}
                <TextField fullWidth
                  // id="outlined-basic1" 
                  label="Name" 
                  type={"text"}
                  variant="outlined" 
                />
                <div className="gap"></div>
                <TextField fullWidth
                  // id="outlined-basic1" 
                  label="Email" 
                  type={"email"}
                  variant="outlined" 
                />
                <div className="gap"></div>
                <TextField fullWidth
                  // id="outlined-basic1" 
                  label="Phone Number" 
                  type={"number"}
                  variant="outlined" 
                />
                <div className="gap"></div>
                <TextField fullWidth
                  // id="outlined-basic1" 
                  label="House Name" 
                  type={"text"}
                  variant="outlined" 
                />
                <div className="gap"></div>
                <TextField fullWidth
                  // id="outlined-basic1" 
                  label="Locality" 
                  type={"text"}
                  variant="outlined" 
                />
                <div className="gap"></div>
                <TextField fullWidth
                  // id="outlined-basic1" 
                  label="City" 
                  type={"text"}
                  variant="outlined" 
                />
                <div className="gap"></div>
                <TextField fullWidth
                  // id="outlined-basic1" 
                  label="Pincode" 
                  type={"number"}
                  variant="outlined" 
                />
                <div className="gap"></div>
                {/* <TextField fullWidth
                  // id="outlined-basic1" 
                  label="Date of Birth" 
                  type={"date"}
                  variant="outlined" 
                /> */}
                <TextField
                  name="someDate"
                  label="Date of Birth"
                  InputLabelProps={{ shrink: true, required: true }}
                  type="date"
                />
                <div className="gap"></div>
                <TextField fullWidth
                  // id="outlined-basic1" 
                  label="Password" 
                  type={"password"}
                  variant="outlined" 
                />
                    <div className="gap"></div>
                {/* <TextField fullWidth
                  // id="outlined-basic1" 
                  label="Confirm Password" 
                  type={"password"}
                  variant="outlined" 
                /> */}
                
                    {/* <input placeholder='Email' type="email" name="" id="" />
                    <input placeholder='Phone number' type="number" name="" id="" />
                    <input placeholder='House Name' type="text" name="" id="" />
                    <input placeholder='Locality' type="text" name="" id="" />
                    <input placeholder='City' type="text" name="" id="" />
                    <input placeholder='Pincode' type="number" name="" id="" />
                    <input placeholder='Date of Birth' type="date" name="" id="" />
                    <input placeholder='Password' type="password" name="" id="" /> */}
                    {/* <button onClick={navigateToHome} type='submit'>Create Account</button> */}
                    
                    <Button onClick={navigateToHome} variant="contained">Create Account</Button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignUp