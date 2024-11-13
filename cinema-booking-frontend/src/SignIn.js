// src/components/SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement sign-in logic here
    console.log('Sign-in data:', formData);

    // Simulate a successful login
    const isAuthenticated = true; // Replace this with real authentication logic

    if (isAuthenticated) {
      navigate('/dashboard'); // Redirect to the dashboard
    } else {
      alert('Invalid login credentials'); // Handle failed login logic
    }
  };

  return (
    <div className="signin-container">
      <h2>Sign In to Your Account</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit" className="btn">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;
