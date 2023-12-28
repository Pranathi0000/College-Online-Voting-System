package com.restapi.services;

import java.util.List;
import java.util.Map;
import com.restapi.model.Voter;

public interface VoterServices {
	
	//takes the details of the user to login
	public String login(Voter voter);
	
	//checks whether the voter cast his/her vote
	public boolean hasVoted(long voterId);
	
	//displays the results of the election
	public List<Map<String, Object>> results();

}
