import React, { useState,useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './ListStyles.css';

const VoterList = () => {
  const [voters, setVoters] = useState([]);
  const [selectedVoterId, setSelectedVoterId] = useState(null); // State to hold selected voter ID
  const [showConfirmation,setShowConfirmation]=useState('');
  const history = useNavigate();

  useEffect(() => {
    fetchVoters();
  }, []);

  const fetchVoters = async () => {
    try {
      const response = await axios.get('http://localhost:8080/voters');
      setVoters(response.data);
    } catch (error) {
      console.error('Error fetching voters:', error);
    }
  };

  const deleteVoter = async () => {
    try {
      console.log(selectedVoterId);
      await axios.delete(`http://localhost:8080/deletevoter/${selectedVoterId}`);
     
      setSelectedVoterId(null); // Reset selectedVoterId after deletion
      fetchVoters();
    } catch (error) {

      if (error.message === 'Request failed with status code 500') {
        // Display an alert to the admin indicating they can't delete the party
        alert('Cannot delete the voter as he/she has voted to a party.');
      } else {
        // Handle other errors or show a generic error message
        alert('An error occurred. Please try again later.');
      }

      console.error('Error deleting voter:', error.message);

    }
  };

 
  const handleDeleteClick = (voterId) => {
    setSelectedVoterId(voterId);
    setShowConfirmation(true);
  };

  const confirmDelete = () => {
    deleteVoter();
    setSelectedVoterId(null);
    setShowConfirmation(false);
  };

  const cancelDelete = () => {
    setSelectedVoterId(null);
    setShowConfirmation(false);
  };



  const handleUpdate = (voterId) => {
    // Navigate to the update page with the voter ID as a URL parameter
    history(`/update/${voterId}`);
  };

  const handleCreate = () => {
    // Navigate to the create page
    history('/create');
  };

  return (
    <div className="voter-list">
    <h2>Voter List</h2>
    <Link to="/admindash"><button className="dash-btn">dashboard</button></Link>
    <button className ="create-button" onClick={handleCreate}>Add Voter</button>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Registration Number</th>
          <th>Date of Birth</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {voters.map(voter => (
          <tr key={voter.id}>
            <td>{voter.voterId}</td>
            <td>{voter.name}</td>
            <td>{voter.regNum}</td>
            <td>{voter.dob}</td>
            <td>
              <button onClick={() => handleDeleteClick(voter.voterId)}>Delete Voter</button>
              <button onClick={() => handleUpdate(voter.voterId)}>Update Voter</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className={`confirmation-modal ${showConfirmation ? 'show' : ''}`}>
  <div className="confirmation-content">
    <p>Are you sure you want to delete this voter?</p>
    <button onClick={confirmDelete}>Confirm Delete</button>
    <button onClick={cancelDelete}>Cancel</button>
  </div>
</div>
</div>
  
  );
};

export default VoterList;
