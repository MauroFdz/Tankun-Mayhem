package com.example.demo;

public class Perfil 
{
	private long id;
	private String name;
	private String pass;
	public String getName() 
	{
		return name;
	}
	public void setName(String name) 
	{
		this.name = name;
	}
	public String getPass() 
	{
		return pass;
	}
	public void setPass(String pass) 
	{
		this.pass = pass;
	}
	public long getId() 
	{
		return id;
	}
	public void setId(long id) 
	{
		this.id = id;
	}
	@Override
	public String toString() 
	{
		return "Perfil [name=" + name + ", password=" + pass + "]";
	}
}
