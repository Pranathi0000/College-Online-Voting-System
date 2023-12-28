package com.restapi.repo;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restapi.model.Parties;

public interface PartyRepository extends JpaRepository<Parties,Serializable> {

	public Parties findByName(String name);

}
