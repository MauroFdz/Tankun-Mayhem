package com.example.demo;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/ranking")
	public class RankingController {
	Map<Long,Ranking> map= new ConcurrentHashMap<>();
	AtomicLong nextId= new AtomicLong(0);
	String rankingPath="src\\main\\java\\com\\example\\demo\\ranking.txt";

	@CrossOrigin(origins = "*")
	@GetMapping
	public Collection<Ranking> getRanking() throws IOException{
		map= new ConcurrentHashMap<>();
		AtomicLong nextId= new AtomicLong(0);
		BufferedReader br=new BufferedReader(new FileReader(rankingPath));
		while(br.readLine()!=null) {
			int pos=Integer.parseInt(br.readLine());
			String name=br.readLine();
			int punt=Integer.parseInt(br.readLine());
			Ranking ranking=new Ranking(pos,punt,name);
			map.put(nextId.getAndIncrement(), ranking);
		}
		br.close();
		System.out.println("Get correcto");
		return map.values();
	}
	@CrossOrigin(origins = "*")
	@PutMapping("/{id}")
	public ResponseEntity<Ranking> putRanking(@PathVariable long id,@RequestBody Ranking ranking) throws IOException{
		map.put(id, ranking);
		String str="";
		for(Ranking r:map.values()) {
			String straux="-----\n"+r.getPos()+"\n"+r.getName()+"\n"+r.getPunt()+"\n";
			str=str.concat(straux);
		}
		Files.write(Paths.get(rankingPath), str.getBytes());
		return new ResponseEntity<>(ranking,HttpStatus.OK);
	}
}
