import React, { useState } from 'react';
import './Login.css';

import email_icon from '../Components/Icons/email.png';
import password_icon from '../Components/Icons/password.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    fetch('your-backend-url/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then(response => {
        if (response.ok) {
          // Redirect to next page on successful login
          window.location.href = '/Dashboard'; // Navigate to '/dashboard' route
        } else {
          setError('Invalid email or password.');
        }
      })
      .catch(error => {
        console.error('Error during login:', error);
        setError('An error occurred during login. Please try again later.');
      });
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Login</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src={email_icon} alt=''/>
          <input
            type='email'
            placeholder='Email ID'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className='input'>
          <img src={password_icon} alt=''/>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <div className='forgot-password'>Forgot Password?<span>Click Here!</span></div>
      </div>
      
      <div className='submit-container'>
        <div className="submit" onClick={handleLogin}>Login</div>
      </div>
    </div>
  );
};

export default Login;