package com.restapi.repo;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restapi.model.Parties;
import com.restapi.model.Votes;

public interface VotesRepository extends JpaRepository<Votes,Serializable>{

	public int countByParty(Parties party);

	public boolean existsByVoterRegNum(String regNum);

	

}
