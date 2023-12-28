import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import { useParams } from 'react-router-dom';
import './DashStyles.css';

const VoterDashboard = () => {
  const { regNum } = useParams();
  return (
    <div className="voter-container">
  <h2 className="voter-title">Voter Dashboard</h2>
  <nav className="voter-navbar">
    <ul>
      <li>
      <Link to={`/vote/${regNum}`}>Vote</Link>
      </li>
      <li>
        <Link to="/count">View Results</Link>
      </li>
      <li>
        <Link to="/">Log out</Link>
      </li>
    </ul>
  </nav>
</div>

  );
};

export default VoterDashboard;
