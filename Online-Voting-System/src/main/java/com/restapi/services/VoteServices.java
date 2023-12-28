package com.restapi.services;

public interface VoteServices {
	
	public boolean hasVoted(String regNum);
	
	public void castVote(String regNum, String name);

}
