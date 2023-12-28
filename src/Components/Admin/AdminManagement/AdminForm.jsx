import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminForm = () => {
  const history=useNavigate();
  const [adminData, setAdminData] = useState({
    name: '',
    password: '',
    position: ''
  });

  const handleChange = e => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:8080/addadmin`, adminData);
      setAdminData({
        name: '',
        password: '',
        position: ''
      });
      history('/adminlist'); // Redirect to AdminList after successful creation
    } catch (error) {
      console.error('Error creating admin:', error);
      // Display error message or handle the error accordingly
    }
  };
  return (
    <div className="form-container">
    <h2>Create Admin</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={adminData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={adminData.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="position">Position:</label>
        <input
          type="text"
          id="position"
          name="position"
          value={adminData.position}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <button type="submit">Create Admin</button>
      </div>
    </form>
  </div>
  );
};

export default AdminForm;
