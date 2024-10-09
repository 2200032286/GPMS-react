import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Login.css'; // Link to the CSS file for styling

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const navigate = useNavigate(); // Initialize useNavigate

  const validateEmail = (email) => {
    // Check if the email contains '@' symbol
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    // Password must contain one uppercase, one lowercase, one number, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission for validation
    if (!validateEmail(email)) {
      setErrorMessage('Invalid email address');
    } else if (!validatePassword(password)) {
      setErrorMessage('Password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character.');
    } else {
      setErrorMessage('');
      // Proceed with login (e.g., API call)
      alert('Login successful!'); // You can replace this with actual login logic
      navigate('/tasks'); // Navigate to the Tasks page
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email (Username):</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </div>

        {errorMessage && <p className="error">{errorMessage}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
