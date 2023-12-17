package com.example.demo;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/chat")
public class ChatController {
	Map<Long,Chat> map= new ConcurrentHashMap<>();
	AtomicLong nextId= new AtomicLong(0);
	@CrossOrigin(origins = "*")
	@GetMapping
	public Collection<Chat> getChat() throws IOException{
		System.out.println("Get correcto");
		return map.values();
	}
	@CrossOrigin(origins = "*")
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Chat postUser(@RequestBody Chat chat) throws IOException{
		map.put(nextId.getAndIncrement(), chat);
		System.out.println("Post correcto");
		return chat;
	}
}
