import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UpdateStyles.css'

const AdminUpdateForm = () => {
  const history=useNavigate();
  const { id } = useParams();
  const [adminData, setAdminData] = useState({
    id: id,
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
      await axios.put(`http://localhost:8080/editadmin`, adminData);
      // Success message or redirect after successful update
      console.log('Admin updated successfully:', adminData);

      setAdminData({
        name: '',
        password: '',
        position: ''
      });
      history('/adminlist'); 
    } catch (error) {
      console.error('Error updating admin:', error);
      // Display error message or handle the error accordingly
    }
  };

  return (
    <div className="form-container">
    <h2>Update Admin</h2>
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
        <button type="submit">Update Admin</button>
      </div>
    </form>
  </div>
  );
};

export default AdminUpdateForm;
