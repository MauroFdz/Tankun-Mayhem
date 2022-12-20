package com.example.demo;

public class Mensaje {
	private long id;
	private String user;
	private String message;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() 
	{
		return "Mensaje [user=" + user + ", message=" + message + "]";
	}
	
}
