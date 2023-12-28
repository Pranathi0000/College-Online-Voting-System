import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ListStyles.css';

const PartyList = () => {
  const [parties, setParties] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedPartyId, setSelectedPartyId] = useState(null);
  const history = useNavigate();

  useEffect(() => {
    fetchParties();
  }, []);

  const fetchParties = async () => {
    try {
      const response = await axios.get('http://localhost:8080/parties');
      setParties(response.data);
    } catch (error) {
      console.error('Error fetching parties:', error);
    }
  };

  const deleteParty = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/deleteparty/${id}`);
      fetchParties();
    } catch (error) {
      if (error.response.status === 500) {
        // Display an alert to the admin indicating they can't delete the party
        alert('Cannot delete the party as it has associated votes.');
      } else {
        // Handle other errors or show a generic error message
        alert('An error occurred. Please try again later.');
      }

      console.error('Error deleting party:', error.message);
    }
  };

  const handleUpdate = (id) => {
    history(`/update-party/${id}`);
  };

  const handleCreate = () => {
    history('/create-party');
  };

  const handleDeleteClick = (id) => {
    setSelectedPartyId(id);
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    deleteParty(selectedPartyId);
    setShowConfirmation(false);
    setSelectedPartyId(null);
  };

  const cancelDelete = () => {
    setShowConfirmation(false);
    setSelectedPartyId(null);
  };

  return (
    <div className="party-list">
      <h2>Party List</h2>
      <Link to="/admindash"><button className="dash-btn">dashboard</button></Link>
      <button className="create-button" onClick={handleCreate}>
        Create
      </button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Party Name</th>
            <th>Leader Name</th>
            <th>Symbol</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {parties.map((party) => (
            <tr key={party.id}>
              <td>{party.id}</td>
              <td>{party.name}</td>
              <td>{party.leader}</td>
              <td>{party.symbol}</td>
              <td>
                <button onClick={() => handleDeleteClick(party.id)}>Delete</button>
                <button onClick={() => handleUpdate(party.id)}>Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showConfirmation && (
        <div className={`confirmation-modal ${showConfirmation ? 'show' : ''}`}>
          <div className="confirmation-content">
            <p>Are you sure you want to delete this party?</p>
            <button onClick={confirmDelete}>Confirm Delete</button>
            <button onClick={cancelDelete}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PartyList;
