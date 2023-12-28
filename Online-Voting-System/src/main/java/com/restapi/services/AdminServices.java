package com.restapi.services;

import java.util.List;
import java.util.Map;

import com.restapi.model.Admin;
import com.restapi.model.Parties;
import com.restapi.model.Voter;

public interface AdminServices {
	
	//check whether the admin is in database or not
	public String adminLogin(Admin admin);
	
	//creates a new admin
	public Admin createAdmin(Admin admin);
	
	//display all the admins
	public List<Admin> displayAdmins();
	
	//edits the admin
	public Admin updateAdmin(Admin admin);
	
	//deletes the admin
	public String deleteAdmin(int id);
	
	//adds new voter
	public Voter addVoter(Voter voter);
	
	//displays all the voters
	public List<Voter> displayVoters();
	
	//updates voter details
	public Voter updateVoter(Voter voter);
	
	//deletes a voter
	public String deleteVoter(long voterId);
	
	//adds a party
	public Parties addParty(Parties party);
	
	//displays all the parties
	public List<Parties> displayParties();
	
	//updates the party details 
	public Parties updateParty(Parties details);
	
	//deletes a party
	public String deleteParty(int id);
	
	//displays the results
	public List<Map<String, Object>> getVotes();
  
	
}
