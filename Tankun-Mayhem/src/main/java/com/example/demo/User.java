package com.example.demo;

public class User {
	private String  name,password;
	long id;
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	public User(long id,String name, String password) {
		this.id=id;
		this.name = name;
		this.password = password;
	}
	public String toString() {
		return "Usuario [user ="+name+", password= "+password+"]";
	}
}
