import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ListStyles.css';

const AdminList = () => {
  const [admins, setAdmins] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedAdminId, setSelectedAdminId] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    fetchAdmins();
  }, []);

  const fetchAdmins = async () => {
    try {
      const response = await axios.get('http://localhost:8080/admins');
      setAdmins(response.data);
    } catch (error) {
      console.error('Error fetching admins:', error);
    }
  };

  const deleteAdmin = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/deleteadmin/${id}`);
      fetchAdmins();
    } catch (error) {
      console.error('Error deleting admin:', error);
    }
  };

  const handleDeleteClick = (id) => {
    setSelectedAdminId(id);
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    deleteAdmin(selectedAdminId);
    setShowConfirmation(false);
    setSelectedAdminId(null);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
    setSelectedAdminId(null);
  };

  const handleUpdate = (id) => {
    history(`/update-admin/${id}`);
  };

  const handleCreate = () => {
    history('/create-admin');
  };


  return (
    <div className="admin-list">
      <h2>Admin List</h2>
      <Link to="/admindash"><button className="dash-btn">dashboard</button></Link>
      <button className="create-button" onClick={handleCreate}>Create Admin</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Admin Name</th>
            <th>Admin Position</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td>{admin.id}</td>
              <td>{admin.name}</td>
              <td>{admin.position}</td>
              <td>
                <button onClick={() => handleDeleteClick(admin.id)}>Delete Admin</button>
                <button onClick={() => handleUpdate(admin.id)}>Update Admin</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showConfirmation && (
        <div className={`confirmation-modal ${showConfirmation ? 'show' : ''}`}>
          <div className="confirmation-content">
            <p>Are you sure you want to delete this admin?</p>
            <button onClick={confirmDelete}>Confirm Delete</button>
            <button onClick={cancelDelete}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminList;
