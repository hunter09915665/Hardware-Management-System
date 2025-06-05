import React from 'react';
import  { useState } from 'react';
import './Login.css'; // Assuming you have a CSS file for styling
import { FaUser,FaLock } from "react-icons/fa";

const Login = () => {
    const [password, setPassword] = useState('');
  return (
    <div className='login-form'>
        <form action="">
            <h1>Login</h1>
            <div className='input-box'>
                

                <input type='text' placeholder='Username' required />
                 <FaUser className='icon'/>

            </div>
            <div className='input-box'>
                 
                 
                <input type='password' placeholder='Password' required value={password} onChange={e => setPassword(e.target.value)} />
                {password === '' && <FaLock className='icon' />}
              

            </div>
            <div className='remember-forget'>
                <label><input type='checkbox' />Remember Me</label>
                <a href='#' >Forget Password ?</a>

            </div>
            <button type='submit'>Login</button>

            <div className='Register-link'>
                <p>Don't have an account ? <a href='#'>Register</a></p>

            </div>


        </form>

      
    </div>
  )
}

export default Login
