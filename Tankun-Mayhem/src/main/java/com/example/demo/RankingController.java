package com.example.demo;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ranking")
	public class RankingController {
	Map<Long,Ranking> map= new ConcurrentHashMap<>();
	AtomicLong nextId= new AtomicLong(0);
	String usersPath="src\\main\\java\\com\\example\\demo\\ranking.txt";

	@CrossOrigin(origins = "*")
	@GetMapping
	public Collection<Ranking> getUsuarios() throws IOException{
		map= new ConcurrentHashMap<>();
		BufferedReader br=new BufferedReader(new FileReader(usersPath));
		while(br.readLine()!=null) {
			int pos=Integer.parseInt(br.readLine());
			String name=br.readLine();
			int punt=Integer.parseInt(br.readLine());
			Ranking ranking=new Ranking(pos,punt,name);
			map.put(nextId.incrementAndGet(), ranking);
		}
		br.close();
		System.out.println("Get correcto");
		return map.values();
	}
}
