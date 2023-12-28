
import './App.css';
import { Route, Routes } from 'react-router-dom';
import UpdateAdminForm from './Components/Admin/AdminManagement/UpdateAdminForm';
import AdminForm from './Components/Admin/AdminManagement/AdminForm';
import AdminList from './Components/Admin/AdminManagement/AdminList';
import UpdatePartyForm from './Components/Admin/PartyManagement/UpdatePartyForm';
import PartyForm from './Components/Admin/PartyManagement/PartyForm';
import PartyList from './Components/Admin/PartyManagement/PartyList';
import UpdateVoterForm from './Components/Admin/VoterManagement/UpdateVoterForm';
import VoterForm from './Components/Admin/VoterManagement/VoterForm';
import VoterList from './Components/Admin/VoterManagement/VoterList';
import VoterLogin from './Components/Voter/Login/VoterLogin';
import AdminLogin from './Components/Admin/Login/AdminLogin';
import CastVote from './Components/Voter/Castvote/CastVote';
import VoteCount from './Components/Admin/Votes/VoteCount';
import VoterDashboard from './Components/Voter/Dashboard/VoterDashboard';
import AdminDashboard from './Components/Admin/Dashboard/AdminDashboard';
import HomePage from './Components/Home/HomePage';
import About from './Components/Home/About';

function App() {
  return (
    
  
      <Routes>

        <Route path="/" element={<HomePage/>}/>
   
        <Route path="/about" element={<About/>}/>
        
        <Route path="/voterlist" element={<VoterList/>}/>

        <Route path="/voter-login" element={<VoterLogin/>}/>
          
       <Route path="/admin-login" element={<AdminLogin/>}/>

       <Route path="/vote/:regNum" element={<CastVote/>}/>

        <Route  path="/create" element={<VoterForm />}/>
          
          <Route path="/count" element={<VoteCount/>}/>

          <Route path="/voterdash/:regNum" element={<VoterDashboard/>}/>

          <Route path="/admindash" element={<AdminDashboard/>}/>
      
        <Route  path="/update/:voterId" element={<UpdateVoterForm />}/>

        <Route path="/partylist" element={<PartyList/>}/>

        <Route path="/update-party/:id" element={<UpdatePartyForm/>}/>

        <Route path="/create-party" element={<PartyForm/>}/>

        <Route path="/adminlist" element={<AdminList/>}/>

        <Route path="/update-admin/:id" element={<UpdateAdminForm/>}/>

        <Route path="/create-admin" element={<AdminForm/>}/>
          
      </Routes>
   
   
  );
}

export default App;
