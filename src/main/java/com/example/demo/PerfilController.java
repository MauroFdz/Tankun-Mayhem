package com.example.demo;

import java.util.Collection;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;  // Import the IOException class to handle errors
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/perfiles")
public class PerfilController {
 
	Map<Long, Perfil> perfiles = new ConcurrentHashMap<>(); 
	AtomicLong nextId = new AtomicLong(0);
	@GetMapping
	public Collection<Perfil> perfiles() throws IOException {		
		BufferedReader br = new BufferedReader(new FileReader("src\\main\\java\\com\\example\\demo\\perfiles.txt"));
		while(br.readLine()!=null) {
		Perfil perfil=new Perfil();
		long id = nextId.incrementAndGet();
		perfil.setId(id);
		String name=br.readLine();
		String pass=br.readLine();
		perfil.setName(name);
		perfil.setPass(pass);
		perfiles.put(id, perfil);
		}
		br.close();
		System.out.println(perfiles);
		return perfiles.values();
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Perfil nuevoPerfil(@RequestBody Perfil perfil) {

		long id = nextId.incrementAndGet();
		perfil.setId(id);
		perfiles.put(id, perfil);
			//Código en parte sacado de https://www.w3schools.com/java/java_files_create.asp
			try {
		      String cadena="Usuario\n"+perfil.getName()+"\n"+perfil.getPass()+"\n";
		      Files.write(Paths.get("src\\main\\java\\com\\example\\demo\\perfiles.txt"), cadena.getBytes(), StandardOpenOption.APPEND);
		      System.out.println(cadena);
		    } catch (IOException e) {
		      System.out.println("An error occurred.");
		      e.printStackTrace();
		    }
		 
		return perfil;
	}

	@PutMapping("/{id}")
	public ResponseEntity<Perfil> actulizaItem(@PathVariable long id, @RequestBody Perfil updtPerfil) {

		Perfil savedPerfil = perfiles.get(updtPerfil.getId());

		if (savedPerfil != null) {

			perfiles.put(id, updtPerfil);

			return new ResponseEntity<>(updtPerfil, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<Perfil> getPerfil(@PathVariable long id) {

		Perfil savedPerfil = perfiles.get(id);

		if (savedPerfil != null) {
			return new ResponseEntity<>(savedPerfil, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Perfil> borraPerfil(@PathVariable long id) {

		Perfil savedPerfil = perfiles.get(id);

		if (savedPerfil != null) {
			perfiles.remove(savedPerfil.getId());
			return new ResponseEntity<>(savedPerfil, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}

