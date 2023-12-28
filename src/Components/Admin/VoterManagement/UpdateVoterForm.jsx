import React, { useState} from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UpdateVoterForm = () => {
  const history=useNavigate();
  const { voterId } = useParams();
  const [voterData, setVoterData] = useState({
    voterId: voterId,
    name: '',
    regNum: '',
    dob: ''
  });


  const handleChange = e => {
    setVoterData({ ...voterData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/editvoter`, voterData);
      // Success message or redirect after successful update
      console.log('Voter updated successfully:', voterData);

      setVoterData({
        name: '',
        regNum: '',
        dob: ''
      });
      history('/voterlist'); 
    } catch (error) {
      console.error('Error updating voter:', error);
      // Display error message or handle the error accordingly
    }
  };

  return (
    <div className="form-container">
    <h2>Update Voter</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={voterData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="regNum">Registration Number:</label>
        <input
          type="text"
          id="regNum"
          name="regNum"
          value={voterData.regNum}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={voterData.dob}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <button type="submit">Update Voter</button>
      </div>
    </form>
  </div>
  );
};

export default UpdateVoterForm;
