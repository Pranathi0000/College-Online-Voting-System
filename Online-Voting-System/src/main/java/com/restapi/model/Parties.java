package com.restapi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Parties {
  
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	//stores the party name
	private String name;
	
	//stores the party leader name
	private String leader;
	
	//stores the party symbol
	private String symbol;
    
	
	//getters and setters
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLeader() {
		return leader;
	}

	public void setLeader(String leader) {
		this.leader = leader;
	}

	public String getSymbol() {
		return symbol;
	}

	public void setSymbol(String symbol) {
		this.symbol = symbol;
	}
	
	//constructors

	public Parties(int id, String name, String leader, String symbol) {
		super();
		this.id = id;
		this.name = name;
		this.leader = leader;
		this.symbol = symbol;
	}

	public Parties() {
		super();
	}
	
	
}
