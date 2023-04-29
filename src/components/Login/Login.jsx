import React, { useState } from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';
const Login = () => {
const[error,setError] =useState("")
  const handleLogIn=(event)=>{
    event.preventDefault();
    const form =event.target;
    const email =form.email.value;
    const password =form.password.value;
    // const confirm =form.confirm.value;
    console.log(email,password)
     setError('')
    if(password.length < 6){
      setError('Your password must be 6 characters or longer')
      return
     }
     else if(!/(?=.*?[0-9])/.test(password)){
      setError('Your password add one number')
      return
     }
     else if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
        setError('Your password add one special character ')
        return;
     }
     else if(!/(?=.*?[A-Z].*?[A-Z])/.test(password)){
      setError('Your Password add 2 Uppercase Letter')
      return;
     }
  }
    return (
        <div>
          <div className="form-container">
            <h2 className='form-title'>Login !!</h2>
            <form onSubmit={handleLogIn}>
                <div className="form-control">
                  <label htmlFor="email">Email</label>
                  <input type="email" name='email' id='email' placeholder='Enter Your Email :' required />
                </div>
                <div className="form-control">
                  <label htmlFor="password">Password</label>
                  <input type="password" name='password' id='password' placeholder='Enter Your Password :' required />
                </div>
                <input type="submit" className='btn-submit' value="Login" />
            </form>
            <p>
            <small>New to Ema John ? 
             <Link to="/signup">Create New Account</Link>
            </small>
          </p>
          <p>{error}</p>
          </div>
        </div>
    );
};

export default Login;