package com.restapi.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.restapi.services.VoteServices;

@RestController
@CrossOrigin(origins= "http://localhost:3000")
public class VoteController {
	
	 @Autowired
	    private VoteServices voteServices;

	    @PostMapping("/cast-vote/")
	    public ResponseEntity<String> castVote(@RequestBody Map<String, String> requestData) {
	    	 String regNum = requestData.get("regNum");
	    	    String name = requestData.get("name");
	    	    
	    	    if (regNum == null || regNum.isEmpty() || name == null || name.isEmpty()) {
	    	        return ResponseEntity.ok("Data insuficient");
	    	    }
	    	    
	        try {
	            if (!voteServices.hasVoted(regNum)) {
	                voteServices.castVote(regNum, name);
	                return ResponseEntity.ok("Vote casted successfully!");
	            } else {
	                return ResponseEntity.ok("The voter has already cast their vote.");
	            }
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error casting vote: " + e.getMessage());
	        }
	    }

}
