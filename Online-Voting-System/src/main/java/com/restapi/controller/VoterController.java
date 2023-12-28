package com.restapi.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.restapi.model.Voter;
import com.restapi.services.VoterServices;

@RestController
@CrossOrigin(origins= "http://localhost:3000")
public class VoterController {
	
	@Autowired
	private VoterServices voterService;
	
	//voter login process
	
	@PostMapping("/login")
	public ResponseEntity<String> login(@RequestBody Voter voter)
	{
		String status=voterService.login(voter);
		return new ResponseEntity<String>(status, HttpStatus.OK);
	}
	
	//checking the vote status of the particular voter
	
	@GetMapping("/votestatus/{voterId}")
	public ResponseEntity<String> checkVote(@PathVariable long voterId)
	{
		if(voterService.hasVoted(voterId))
		{
			return new ResponseEntity<String>("Vote Casted",HttpStatus.OK);
		}
		return new ResponseEntity<String>("Vote is not casted yet",HttpStatus.OK);
	}
	
	//checks the results of the election
	
	@GetMapping("/results")
	public ResponseEntity<List<Map<String,Object>>> getResults()
	{
		List<Map<String, Object>> result = voterService.results();
		return ResponseEntity.ok(result);
	}

}
