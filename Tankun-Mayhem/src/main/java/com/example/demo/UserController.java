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
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
	@CrossOrigin(origins = "*")
	@GetMapping
	public Collection<User> getUsuarios() throws IOException{
		map= new ConcurrentHashMap<>();
		nextId= new AtomicLong(0);
		BufferedReader br=new BufferedReader(new FileReader(usersPath));
		while(br.readLine()!=null) {
			long id=nextId.getAndIncrement();
			String name=br.readLine();
			String password=br.readLine();
			User user=new User(id,name,password);
			map.put(id, user);
		}
		br.close();
		System.out.println("Get correcto");
		return map.values();
	}
	@CrossOrigin(origins = "*")
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public User postUser(@RequestBody User user) throws IOException{
		map.put(nextId.getAndIncrement(), user);
		String str=user.getId()+"\n"+user.getName()+"\n"+user.getPassword()+"\n";
		Files.write(Paths.get(usersPath), str.getBytes(), StandardOpenOption.APPEND);
		System.out.println("Post correcto");
		return user;
	}
	@CrossOrigin(origins = "*")
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteUser(@PathVariable long id) throws IOException {
		System.out.println(id);
		nextId= new AtomicLong(0);
		User user=map.get(id);
		map.remove(id);
		String str="";
		for(User u:map.values()) {
			u.setId(nextId.getAndIncrement());//Hay que reasignar los ids para no dejar espacios vacios
			String straux=u.getId()+"\n"+u.getName()+"\n"+u.getPassword()+"\n";
			str=str.concat(straux);
		}
		try {
			Files.write(Paths.get(usersPath), str.getBytes());
		}catch(IOException e){
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error al escribir en el archivo");
		}
		return ResponseEntity.ok("Se ha borrado el usuario "+user.getName());
	}
	
}
