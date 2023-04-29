import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';

const SingnUp = () => {
  // 1st
  const [error,setError] = useState("");
  //2nd 
 
  const handleSignUp =(event)=>{
    setError("");
    event.preventDefault()
    //reload tak thekanor jonno
     const form =event.target;
    //  console.log(form);
     const email= form.email.value;
     const password =form.password.value;
     const confirm =form.confirm.value;
     console.log(email,password,confirm);
   
     if(password !== confirm){
      setError('Your Password did not match')
      return
     }
     else if(password.length < 6){
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
          <h2 className='form-title'>Sign Up !!</h2>
          <form onSubmit={handleSignUp}>
              <div className="form-control">
                <label htmlFor="email">Email</label>
                <input type="email" name='email' id='email' placeholder='Enter Your Email :' required />
              </div>
              <div className="form-control">
                <label htmlFor="password">Password</label>
                <input type="password" name='password' id='password' placeholder='Enter Your Password :' required />
              </div>
              <div className="form-control">
                <label htmlFor="confirm"> Confirm Your Password</label>
                <input type="password" name='confirm' id='confirm' placeholder='Enter Your Confirm Password :' required />
              </div>
              <input type="submit" className='btn-submit' value="Sign Up" />
          </form>
          <p>
            <small>Already have an Account ? Please
             <Link to="/login"> Login</Link>
            </small>
          </p>
          <p className='text-error'>{error}</p>
        </div>
      </div>
    );
};

export default SingnUp;