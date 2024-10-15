import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
   
    if (username && password) {
   
      localStorage.setItem('isAuthenticated', true);
      navigate('/list');
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Welcome 😊</h2>
        <div class="form-floating mb-3">
         
          <input
            type="text"
            value={username}class="form-control"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
           <label>Username</label>
        </div>
        <div class="form-floating mb-3">
         
          <input
            type="password"class="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
           <label>Password</label>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
