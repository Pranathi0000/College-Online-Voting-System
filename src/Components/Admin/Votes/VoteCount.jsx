import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Styles.css';

const VoteCount = () => {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    fetchVotes();
  }, []);

  const fetchVotes = async () => {
    try {
      const response = await axios.get('http://localhost:8080/votes');
      // Sort votes based on voteCount in descending order
      const sortedVotes = response.data.sort((a, b) => b.voteCount - a.voteCount);
      setVotes(sortedVotes);
      if (sortedVotes.length > 0) {
        const topParty = sortedVotes[0].partyName;
        toast.success(`Highest Votes:${topParty}`,{
          position: toast.POSITION.TOP_CENTER
        });
      }
    } catch (error) {
      console.error('Error fetching votes:', error);
    }
  };

  return (
    <div className="vote-counts">
      <h2>Vote Counts</h2>
      <table>
        <thead>
          <tr>
            <th>Party Name</th>
            <th>Vote Count</th>
          </tr>
        </thead>
        <tbody>
          {votes.map((vote, index) => (
            <tr key={index}>
              <td>{vote.partyName}</td>
              <td>{vote.voteCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};


export default VoteCount;
