package com.restapi.repo;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restapi.model.Voter;

public interface VoterRepository extends JpaRepository<Voter,Serializable>{

	public Voter findByRegNumAndDob(String regNum,String dob);

	public Voter findByRegNum(String regNum);


}
