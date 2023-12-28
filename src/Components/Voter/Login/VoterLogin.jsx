import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Styles.css';

const VoterLogin = () => {
  const history=useNavigate();
  const [voterCredentials, setVoterCredentials] = useState({
    regNum: '',
    dob: ''
  });

  const { regNum, dob } = voterCredentials;


  const handleChange = e =>
    setVoterCredentials({ ...voterCredentials, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response=await axios.post('http://localhost:8080/login', voterCredentials);
      // Redirect to admin dashboard or perform actions after successful login
      
      console.log(response.data);

      if(response.data==='Login success')
      {
        toast.success('Login successful!', {
          position: toast.POSITION.TOP_CENTER
          
        });
          
        history(`/voterdash/${regNum}`);
      }
      else if(response.data==='Login failed')
      {
        toast.error('Login failed. Please try again.', {
          position: toast.POSITION.TOP_CENTER
        });
      }

      
    } catch (error) {
      console.error('Login failed:', error.response.data);
      // Show error message or take appropriate action
    }
  };


  return (
    <div className="voter-container">
    <h2 className="voter-title">Voter Login</h2>
    <form className="voter-form" onSubmit={handleSubmit}>
      <div>
        <label className="voter-label">Registration Number:</label>
        <br/>
        <input
          className="voter-input"
          type='text'
          placeholder='Enter registration number'
          name='regNum'
          value={regNum}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label className="voter-label">Date of Birth:</label>
        <br/>
        <input
          className="voter-input"
          type='text'
          placeholder='Enter date of birth'
          name='dob'
          value={dob}
          onChange={handleChange}
          required
        />
      </div>
      <input className="voter-submit" type='submit' value='Login' />
    </form>
    <ToastContainer />

  </div>
   
  );
};

export default VoterLogin;
