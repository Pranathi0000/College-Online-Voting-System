package com.restapi.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Voter {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long voterId;
	
	//stores the student name
	private String name;
	
	//stores the register number of the student
	private String regNum;
	
	//stores the student department
	private String department;
	
	//stores the date-of-birth
	private String dob;
	
	//getters and setters
	
	public String getName() {
		return name;
	}
	public long getVoterId() {
		return voterId;
	}
	public void setVoterId(long voterId) {
		this.voterId = voterId;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getRegNum() {
		return regNum;
	}
	public void setRegNum(String regNum) {
		this.regNum = regNum;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	
	
	//constructors
	
	public Voter() {
		super();
	}
	
	public Voter(long voterId, String name, String regNum, String department, String dob) {
		super();
		this.voterId = voterId;
		this.name = name;
		this.regNum = regNum;
		this.department = department;
		this.dob = dob;
	}
	
	

}
