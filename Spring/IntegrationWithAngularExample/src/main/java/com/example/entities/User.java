package com.example.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "MyCar")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private final String name;
	private final String model;
	private final String company;
	private final int price;

	public User(long id, String name, String model, String company, int price) {
		super();
		this.id = id;
		this.name = name;
		this.model = model;
		this.company = company;
		this.price = price;
	}

	public User() {
		super();
		this.name = "";
		this.model =  "";
		this.company =  "";
		this.price =  0;
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public String getModel() {
		return model;
	}

	public String getCompany() {
		return company;
	}

	public int getPrice() {
		return price;
	}

	public void setId(long id) {
		this.id = id;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", model=" + model + ", company=" + company + ", price=" + price
				+ "]";
	}
}
