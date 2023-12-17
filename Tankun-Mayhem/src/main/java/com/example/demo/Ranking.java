package com.example.demo;

public class Ranking {
	int pos, punt;
	String name;
	public Ranking(int pos, int punt, String name) {
		super();
		this.pos = pos;
		this.punt = punt;
		this.name = name;
	}
	public int getPos() {
		return pos;
	}
	public void setPos(int pos) {
		this.pos = pos;
	}
	public int getPunt() {
		return punt;
	}
	public void setPunt(int punt) {
		this.punt = punt;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
}
