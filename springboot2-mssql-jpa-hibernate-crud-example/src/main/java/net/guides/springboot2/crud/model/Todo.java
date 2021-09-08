package net.guides.springboot2.crud.model;

import javax.persistence.*;

@Entity
@Table(name = "todos")
public class Todo {

	private long id;
	private String value;
	private String isDone;


	public Todo() {

	}

	public Todo(String value, String isDone) {
		this.value = value;
		this.isDone = isDone;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "value", nullable = false)
	public String getValue() {
		return value;
	}
	public void setValue(String value) {
		this.value = value;
	}
	
	@Column(name = "isDone", nullable = false)
	public String getIsDone() {
		return isDone;
	}
	public void setIsDone(String isDone) {
		this.isDone = isDone;
	}
	

	@Override
	public String toString() {
		return "Employee [id=" + id + ", value=" + value + ", isDone=" + isDone + "]";
	}
	
}
