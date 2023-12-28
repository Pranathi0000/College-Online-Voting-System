import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 
import './Styles.css'

const CastVote = () => {
  const [selectedParty, setSelectedParty] = useState('');
  const [parties, setParties] = useState([]);
  const { regNum } = useParams();

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

  const handleVote = async () => {
    try {
      const response = await axios.post(`http://localhost:8080/cast-vote/`, {
        regNum:regNum,
        name: selectedParty
      });  
      console.log(response.data);
      if (response.data === 'The voter has already cast their vote.') {

        toast.error('You have already voted', {
          position: toast.POSITION.TOP_CENTER
        });
      } else if (response.data === 'Data insuficient') {
        console.log('Registration number and name cannot be null or empty.');

        toast.error('Please select a party to vote', {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        console.log('Vote cast successfully');
      }
    } catch (error) {
      console.error('Error casting vote:', error);
    }
  };

  return (
    <div className="vote-container">
      <h2 className="vote-title">Vote for a Party</h2>
      <label className="vote-label" htmlFor="party">Select a Party:</label>
      <select
        className="vote-select"
        id="party"
        value={selectedParty}
        onChange={e => setSelectedParty(e.target.value)}
        required
      >
        <option value="">Select Party</option>
        {parties.map(party => (
          <option key={party.id} value={party.name}>
            {party.name}
          </option>
        ))}
      </select>

      {/* {voteCasted && <p>The voter has already cast their vote.</p>} */}

      <button className="vote-button" onClick={handleVote}>Vote</button>
      <ToastContainer/>
    </div>
  );
};

export default CastVote;
