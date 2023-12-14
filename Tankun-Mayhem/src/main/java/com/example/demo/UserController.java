package com.example.demo;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
public class UserController {
	Map<Long,User> map= new ConcurrentHashMap<>();
	AtomicLong nextId= new AtomicLong(0);
	String usersPath="src\\main\\java\\com\\example\\demo\\users.txt";

	@GetMapping
	public Collection<User> getUsuarios() throws IOException{
		map= new ConcurrentHashMap<>();
		BufferedReader br=new BufferedReader(new FileReader(usersPath));
		while(br.readLine()!=null) {
			String name=br.readLine();
			String password=br.readLine();
			User user=new User(name,password);
			map.put(nextId.incrementAndGet(), user);
		}
		br.close();
		System.out.println("Get correcto");
		return map.values();
	}
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public User postUser(@RequestBody User user) throws IOException{
		map.put(nextId.incrementAndGet(), user);
		String str="Usuario\n"+user.getName()+"\n"+user.getPassword()+"\n";
		Files.write(Paths.get(usersPath), str.getBytes(), StandardOpenOption.APPEND);
		System.out.println("Post correcto");
		return user;
	}
	
}
