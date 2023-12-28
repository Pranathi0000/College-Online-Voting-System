package com.restapi.services;

import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restapi.model.Parties;
import com.restapi.model.Voter;
import com.restapi.model.Votes;
import com.restapi.repo.PartyRepository;
import com.restapi.repo.VoterRepository;
import com.restapi.repo.VotesRepository;

@Service
public class VoteServicesImplemantation implements VoteServices {
   
	@Autowired
	private VotesRepository voteRepo;
	
	@Autowired
	private VoterRepository voterRepo;
	
	@Autowired
	private PartyRepository partyRepo;
	
	@Override
	public boolean hasVoted(String regNum) {
		
		
		System.out.println(voterRepo.findByRegNum(regNum));
		
		return voteRepo.existsByVoterRegNum(regNum);
	       
		
	}

	@Override
	public void castVote(String regNum, String name) {
		System.out.println("hello"+regNum);
		if (!hasVoted(regNum)) {
            // Get the voter and party based on provided IDs
            Voter voter = voterRepo.findByRegNum(regNum);
            Parties party = partyRepo.findByName(name);
             System.out.println(voter);
             System.out.println(party);
            // Create a new Votes entity and record the vote
            Votes vote = new Votes();
            vote.setVoter(voter);
            vote.setParty(party);
            vote.setVoteTimestamp(LocalDateTime.now());

            // Save the vote into the votes table
            voteRepo.save(vote);
        } else {
            // Handle the case where the voter has already cast their vote
            throw new IllegalStateException("The voter has already cast their vote.");
        }

}
}
