import React from 'react';
import {Link} from 'react-router-dom';
import './Styles.css';

const AdminDashboard = () => {
  return (
    <div className="dashboard-container">
  <h2 className="dashboard-title">Admin Dashboard</h2>
  <nav className="dashboard-navbar">
    <ul>
      <li>
        <Link to="/voterlist">Voter</Link>
      </li>
      <li>
        <Link to="/count">View Results</Link>
      </li>
      <li>
        <Link to="/adminlist">Admin</Link>
      </li>
      <li>
        <Link to="/partylist">Party list</Link>
      </li>
      <li>
        <Link to="/">Log out</Link>
      </li>
    </ul>
  </nav>
</div>


  );
};

export default AdminDashboard;
