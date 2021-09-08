package net.guides.springboot2.crud.model;

import javax.persistence.*;

@Entity
@Table(name = "places")
public class Place {

	private long id;
	private String name;
	private String country;
	private String comment;

	public Place() {

	}

	public Place(String name, String country, String comment) {
		this.name = name;
		this.country = country;
		this.comment = comment;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "name", nullable = false)
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@Column(name = "country", nullable = false)
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	
	@Column(name = "comment", nullable = false)
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}

	@Override
	public String toString() {
		return "Employee [id=" + id + ", name=" + name + ", country=" + country + ", comment=" + comment
				+ "]";
	}
	
}
