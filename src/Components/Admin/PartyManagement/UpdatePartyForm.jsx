import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './UpdateStyles.css';

const UpdatePartyForm = () => {
  const history=useNavigate();
  const { id } = useParams(); // Get partyId from URL parameter
  
  const [partyData, setPartyData] = useState({
    id: id,
    name: '',
    leader: '',
    symbol: ''
  });

 
  const handleChange = e => {
    setPartyData({ ...partyData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/editparty`, partyData);
      // Success message or redirect after successful update
      console.log('Party updated successfully:', partyData);

      setPartyData({
        name: '',
        password: '',
        position: ''
      });
      history('/partylist'); 
    } catch (error) {
      console.error('Error updating party:', error);
      // Display error message or handle the error accordingly
    }
  };

  return (
    <div className="form-container">
      <h2>Update Party</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="partyName">Party Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={partyData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="leaderName">Leader Name:</label>
          <input
            type="text"
            id="leader"
            name="leader"
            value={partyData.leader}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="symbol">Symbol:</label>
          <input
            type="text"
            id="symbol"
            name="symbol"
            value={partyData.symbol}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Update Party</button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePartyForm;
