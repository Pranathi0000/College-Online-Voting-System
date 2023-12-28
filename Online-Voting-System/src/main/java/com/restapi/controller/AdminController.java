package com.restapi.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.restapi.model.Admin;
import com.restapi.model.Parties;
import com.restapi.model.Voter;
import com.restapi.services.AdminServices;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {
	
	@Autowired
	private AdminServices adminService;
	
	//admin management methods
	
	@PostMapping("/loginadmin")
	public ResponseEntity<String> login(@RequestBody Admin admin)
	{
		String status=adminService.adminLogin(admin);
		return new ResponseEntity<String>(status, HttpStatus.OK);
	}
	
	
	@PostMapping("/addadmin")
	public ResponseEntity<Admin> insertAdmin(@RequestBody Admin admin)
	{
		
		return new ResponseEntity<>(adminService.createAdmin(admin),HttpStatus.OK);
	}
	
	@GetMapping("/admins")
	public ResponseEntity<List<Admin>> adminList()
	{
		List<Admin> adminList=adminService.displayAdmins();
		return new ResponseEntity<>(adminList,HttpStatus.OK);
	}
	
	@PutMapping("/editadmin")
	public ResponseEntity<Admin> editVoter(@RequestBody Admin admin)
	{
		Admin record=adminService.updateAdmin(admin);
		return new ResponseEntity<>(record,HttpStatus.OK);
	}
	

	@DeleteMapping("/deleteadmin/{id}")
	public ResponseEntity<String> removeAdmin(@PathVariable int id)
	{
		String message=adminService.deleteAdmin(id);
		return new ResponseEntity<>(message,HttpStatus.OK);
	}
	
	
	//voter management methods
	
	@PostMapping("/addvoter")
	public ResponseEntity<Voter> insertVoter(@RequestBody Voter voter)
	{
		return new ResponseEntity<>(adminService.addVoter(voter),HttpStatus.OK);
		
	}
	
	@GetMapping("/voters")
	public ResponseEntity<List<Voter>> voterList()
	{
		List<Voter> voterList=adminService.displayVoters();
		return new ResponseEntity<>(voterList,HttpStatus.OK);
	}
	
	@PutMapping("/editvoter")
	public ResponseEntity<Voter> editVoter(@RequestBody Voter voter)
	{
		Voter record=adminService.updateVoter(voter);
		return new ResponseEntity<>(record,HttpStatus.OK);
	}
	
	@DeleteMapping("/deletevoter/{voterId}")
	public ResponseEntity<String> removeVoter(@PathVariable long voterId)
	{
		String message=adminService.deleteVoter(voterId);
		return new ResponseEntity<>(message,HttpStatus.OK);
	}
    
	
	
	//party management methods
	
	@PostMapping("/addparty")
     public ResponseEntity<Parties> insertParty(@RequestBody Parties party)
     {
    	 return new ResponseEntity<>(adminService.addParty(party),HttpStatus.OK);
     }
     
	@GetMapping("/parties")
     public ResponseEntity<List<Parties>> partiesList()
     {
    	 List<Parties> parties=adminService.displayParties();
    	 return ResponseEntity.ok(parties);
     }
     
	@PutMapping("/editparty")
     public ResponseEntity<Parties> editParty(@RequestBody Parties party)
     {
    	 return new ResponseEntity<Parties>(adminService.updateParty(party),HttpStatus.OK);
     }
     
	@DeleteMapping("/deleteparty/{id}")
     public ResponseEntity<String> deleteParty(@PathVariable int id)
     {
    	 return new ResponseEntity<>(adminService.deleteParty(id),HttpStatus.OK);
     }
	
	@GetMapping("/votes")
    public ResponseEntity<List<Map<String, Object>>> getVotes() {
        List<Map<String, Object>> votesList = adminService.getVotes();
        return ResponseEntity.ok(votesList);
    }
}
