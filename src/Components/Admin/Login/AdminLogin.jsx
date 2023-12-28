import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Styles.css';

const AdminLogin = () => {
  const history=useNavigate();
  const [adminCredentials, setAdminCredentials] = useState({
    name: '',
    password: ''
  });

  const handleChange = e => {
    setAdminCredentials({ ...adminCredentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const response=await axios.post('http://localhost:8080/loginadmin', adminCredentials);
      // Redirect to admin dashboard or perform actions after successful login
      
      console.log(response.data);

      if(response.data==='Login success')
      {
        toast.success('Login successful!', {
          position: toast.POSITION.TOP_CENTER
        });
          history('/admindash');
      }
      
    } catch (error) {
      console.error('Error logging in:', error);
      // Display error message or handle login failure

      toast.error('Login failed. Please try again.', {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };

  return (
    <div className="login-container">
    <h2 className="login-title">Admin Login</h2>
    <form className="login-form" onSubmit={handleSubmit}>
      <label className="login-label" htmlFor="name">Name:</label>
      <input
        className="login-input"
        type="text"
        id="name"
        name="name"
        value={adminCredentials.name}
        onChange={handleChange}
        required
      />
      <label className="login-label" htmlFor="password">Password:</label>
      <input
        className="login-input"
        type="password"
        id="password"
        name="password"
        value={adminCredentials.password}
        onChange={handleChange}
        required
      />
      <button className="login-button" type="submit">Login</button>
    </form>
    <ToastContainer />
  </div>
  
  );
};

export default AdminLogin;
