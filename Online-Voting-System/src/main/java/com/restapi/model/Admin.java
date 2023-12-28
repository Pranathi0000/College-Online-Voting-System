package com.restapi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Admin {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	
	//stores the admin name
	private String name;
	
	//stores the admin password
	private String password;
	
	//stores the position on the admin like director,chairman
	private String position;
	
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPosition() {
		return position;
	}

	public void setPosition(String position) {
		this.position = position;
	}

	//constructors
	
	public Admin(int id, String name, String password, String position) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
		this.position = position;
	}

	public Admin() {
		super();
	}
	
	

}
