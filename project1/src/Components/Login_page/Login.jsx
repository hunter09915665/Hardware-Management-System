import React from 'react';
import  { useState } from 'react';
import './Login.css'; // Assuming you have a CSS file for styling
import { FaUser,FaLock } from "react-icons/fa";

const Login = () => {
   const [role, setRole] = useState('Admin');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log('Logging in as:', role);
  };

  return (
    <div className="login-container">
      <div className="left-panel">
        <h1>Hardware<br />Management <br/>System</h1>
        <p>Track your inventory with confidence.</p>
        <img src="../Assets/logo.svg" alt="Warehouse" className="login-image" />
      </div>

      <div className="right-panel">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login</h2>

          <div className="input-box">
            <FaUser />
            <input type="text" placeholder="Username" required />
          </div>

          <div className="input-box">
            <FaLock />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>

          <div className="role-selector">
            {['Admin', 'Manager', 'Cashier'].map((r) => (
              <button
                type="button"
                key={r}
                className={role === r ? 'active-role' : ''}
                onClick={() => setRole(r)}
              >
                {r}
              </button>
            ))}
          </div>

          <label className="remember-me">
            <input type="checkbox" /> Remember me
          </label>

          <button type="submit" className="login-button">Log in</button>
          <p className="forgot-password">Forgot password?</p>
        </form>
      </div>
    </div>
  );
}

export default Login
