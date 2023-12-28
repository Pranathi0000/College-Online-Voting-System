package com.restapi.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restapi.model.Admin;
import com.restapi.model.Parties;
import com.restapi.model.Voter;
import com.restapi.repo.AdminRepository;
import com.restapi.repo.PartyRepository;
import com.restapi.repo.VoterRepository;
import com.restapi.repo.VotesRepository;

@Service
public class AdminServicesImplementation implements AdminServices {
	
	@Autowired
	private PartyRepository partyRepo; //injects the properties of PartyRepository into partyRepo
	
	@Autowired
	private VoterRepository voterRepo; //injects the properties of VoterRepository into voterRepo
	
	@Autowired
	private VotesRepository voteRepo;  //injects the properties of VoteRepository into voteRepo
	
	@Autowired
	private AdminRepository adminRepo;  //injects the properties of AdminRepository into adminRepo
	
	/**
	 * Finds the admin in the database and checks if the login credentials are valid.
	 * 
	 * @param admin The admin object containing the name and password for login.
	 * @return A string indicating the login success or failure.
	 */

	@Override
	public String adminLogin(Admin admin) { 
		
		// Finds the admin record in the database based on provided name and password
		Admin record= adminRepo.findByNameAndPassword(
				admin.getName(),
				admin.getPassword());
		if(record!=null)
		{
		
			return "Login success";
		}
		return "Login failed";
	}
   
	/**
	 * Saves the new admin in the database
	 * 
	 * @param admin The admin object containing the name,password and position for creating a record in the database.
	 * @return The newly created admin entity after it's been saved to the database. 
	 */
	
	@Override
	public Admin createAdmin(Admin admin) {
		
		//saves the admin details to the database and return the admin entity
		return adminRepo.save(admin);
	}
    
	/**
	 * Displays all the admins in the database.
	 * 
	 * @return admin entities in the database.
	 */
	
	@Override
	public List<Admin> displayAdmins()
	{
		//finding all the entities of admins in the database and storing them into list
		List<Admin> admins=adminRepo.findAll();
		return admins;
	}
	
	/**
	 * Edit the admin details and saves the details to the database.
	 * 
	 * @param admin The admin object contains the details of the modified admin details
	 * @return the newly created admin entity and saves it to the database.
	 */
	
	@Override
	public Admin updateAdmin(Admin admin) {
		
		//saves the admin entity to the datbase and returns the updated admin entity
		return adminRepo.save(admin);
	}

	/**
	 * Delete the admin from the database.
	 * 
	 * @param id The id contains the paticular id of the admin you want to delete.
	 * @return A string indicating the admin deletion success or failure.
	 */
	
	@Override
	public String deleteAdmin(int id) {
		
		//checks if the admin which is to be deleted is present in the database by the id provided
		if(adminRepo.existsById(id))
		{
			//if admin is present it will be deleted
			adminRepo.deleteById(id);
			return "Admin Deleted";
		}
		
		//if no record is found corresponding to the id provided
		return "No record found";
	}

	/**
	 * saves the voter to the database
	 * 
	 * @param voter The voter object contains the details of voter name,department,registration number and date-of-birth
	 * @return The newly created voter entity after it's been saved to the database.
	 */
	
	@Override
	public Voter addVoter(Voter voter) {
		
		//saves the voter to database and returns the created voter
		return voterRepo.save(voter);
	}
   
	/**
	 * displays all the voters saves in the database.
	 * 
	 * @return all the voter entities in the database.
	 */
	
	@Override
	public List<Voter> displayVoters() {
		
		//finding all the voter entities in the database and storing them in the list.
		List<Voter> voters=voterRepo.findAll();
		
		return voters;
	}

	/**
	 * edit the Voter details and saves the updated voter details to the database.
	 * 
	 * @param voter The voter object contains the details of the Voter he wants to modify
	 * @return The newly created voter entity after it's been saved to the database.
	 */
	
	@Override
	public Voter updateVoter(Voter voter) {
		
		//saves the voter to database and returns the updated voter
		return voterRepo.save(voter);
	}

	/**
	 * Deletes the voter from the database.
	 * 
	 * @param voterId the voterId is the id of the voter
	 * @return A string indicating the deletion of voter is a success or failure.
	 */
	@Override
	public String deleteVoter(long voterId) {
		
		//checks whether the voter which is to be deleted is present in the database with the given voterId
		if(voterRepo.existsById(voterId))
		{
			voterRepo.deleteById(voterId);
			return "Record Deleted";
		}
		
		return "Record not found";
	}

	/**
	 * adds a party to the database.
	 * 
	 * @param party The party object contains the party name,leader name and symbol.
	 * @return The newly created party entity after it's been saved to the database.
	 */
	
	@Override
	public Parties addParty(Parties party) {
		
		//saves the created party into the database and returns the created entity
		return partyRepo.save(party);
	}

	/**
	 * displays all the parties in the database.
	 * 
	 * @return all the party entities in the database.
	 */
	
	@Override
	public List<Parties> displayParties() {
		
		//finding all the party entities in the database and storing them in list.
		List<Parties> partiesList=partyRepo.findAll();
		return partiesList;
	}

	/**
	 * edit the party details and saves the modified details to the database.
	 * 
	 * @param details The party object contains all the updated details of the party
	 * @return The updated party entity.
	 */
	
	@Override
	public Parties updateParty(Parties details) {
		
		//saves the updated party details to database and returns the updated party
		return partyRepo.save(details);
	}

	/**
	 * Deletes the party from the database
	 * 
	 * @param id id is the unique identifier of the party.
	 * @return A string indicating the deletion success or failure.
	 */
	
	@Override
	public String deleteParty(int id) {
		
		//checks if the requested party entity is present or not
		if(partyRepo.existsById(id))
		{
			partyRepo.deleteById(id);
			return "Party Deleted";
		}
		return "No such party exists";
	}
	
	/**
	 * Retrieves the vote counts for each party by aggregating data from the database.
	 * 
	 * @return A list of maps containing party names and their corresponding vote counts.
	 */

	@Override
	public List<Map<String, Object>> getVotes() {
		
		// Retrieves all parties from the database
		 List<Parties> parties = partyRepo.findAll();
		 
		// Maps each party to a map containing party name and vote count
	        List<Map<String, Object>> votesList = parties.stream().map(party -> {
	            Map<String, Object> voteInfo = new HashMap<>();
	            
	            // Retrieves the vote count for the current party
	            int voteCount = voteRepo.countByParty(party);
	            
	            // Populates the map with party name and its vote count
	            voteInfo.put("partyName", party.getName());
	            voteInfo.put("voteCount", voteCount);
	            return voteInfo;
	        }).collect(Collectors.toList());

	     // Returns a list containing party names and their respective vote counts
	        return votesList;
	}

}
