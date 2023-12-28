package com.restapi.services;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restapi.model.Parties;
import com.restapi.model.Voter;
import com.restapi.repo.PartyRepository;
import com.restapi.repo.VoterRepository;
import com.restapi.repo.VotesRepository;

@Service
public class VoterServicesImplementation implements VoterServices {

	@Autowired
	private VoterRepository voterRepo;  //injects the properties of VoterRepository into voterRepo
	
	@Autowired
	private VotesRepository voteRepo;   //injects the properties of VoteRepository into voteRepo
	
	@Autowired
	private PartyRepository partyRepo;  //injects the properties of PartyRepository into partyRepo
	
	
	/**
	 * Authenticates a voter by verifying the registration number and date of birth.
	 * 
	 * @param voter The voter object containing registration number and date of birth for login.
	 * @return A string indicating the success or failure of the login attempt.
	 */
	
	@Override
	public String login(Voter voter) {
		
		// Finds the voter record in the database based on provided registration number and date of birth
		Voter record= voterRepo.findByRegNumAndDob(
				voter.getRegNum(),
				voter.getDob());
		
		
		if(record!=null)
		{
			return "Login success";
		}
		return "Login failed";
	}

	/**
	 * Checks if a voter has casted a vote based on the provided voter ID.
	 * 
	 * @param voterId The ID of the voter to check for vote casting.
	 * @return A boolean indicating whether the voter has casted a vote (true) or not (false).
	 */
	
	@Override
	public boolean hasVoted(long voterId) {
		
		 // Checks if a vote record exists in the VoteRepository for the given voter ID
		if(voteRepo.existsById(voterId))
		{
			return true;
		}
		return false;
	}

	/**
	 * Retrieves the vote counts for each party by aggregating data from the database.
	 * 
	 * @return A list of maps containing party names and their corresponding vote counts.
	 */
	
	@Override
	public List<Map<String, Object>> results() {
		
		List<Map<String, Object>> results = new ArrayList<>();

        // Fetch all parties from the PartyRepository
        List<Parties> parties = partyRepo.findAll();

        // Iterate through each party to get vote counts from the VoteRepository
        for (Parties party : parties) {
            // Count votes for each party
            int voteCount = voteRepo.countByParty(party);

            // Create a map for party details and vote count
            Map<String, Object> partyInfo = new HashMap<>();
            partyInfo.put("partyName", party.getName());
            partyInfo.put("voteCount", voteCount);

            // Add party info to the list
            results.add(partyInfo);
        }

        return results;
	}

}
