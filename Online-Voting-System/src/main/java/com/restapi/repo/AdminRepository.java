package com.restapi.repo;

import java.io.Serializable;

import org.springframework.data.jpa.repository.JpaRepository;

import com.restapi.model.Admin;

public interface AdminRepository extends JpaRepository<Admin,Serializable>{

	public Admin findByNameAndPassword(String name,String password);


}
