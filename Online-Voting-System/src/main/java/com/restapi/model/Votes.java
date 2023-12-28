package com.restapi.model;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table
public class Votes {
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @ManyToOne
	    @JoinColumn(name = "voter_id")
	    private Voter voter;

	    @ManyToOne
	    @JoinColumn(name = "party_id")
	    private Parties party;

	    private LocalDateTime voteTimestamp;

	    //getters and setters
	    
		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public Voter getVoter() {
			return voter;
		}

		public void setVoter(Voter voter) {
			this.voter = voter;
		}

		public Parties getParty() {
			return party;
		}

		public void setParty(Parties party) {
			this.party = party;
		}

		public LocalDateTime getVoteTimestamp() {
			return voteTimestamp;
		}

		public void setVoteTimestamp(LocalDateTime voteTimestamp) {
			this.voteTimestamp = voteTimestamp;
		}
		
		//constructors

		public Votes(Long id, Voter voter, Parties party, LocalDateTime voteTimestamp) {
			super();
			this.id = id;
			this.voter = voter;
			this.party = party;
			this.voteTimestamp = voteTimestamp;
		}

		public Votes() {
			super();
		}    

}
