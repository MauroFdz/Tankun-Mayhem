package com.example.demo;

import java.util.Collection;
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
	public Collection<Perfil> items() {
		return perfiles.values();
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Perfil nuevoPerfil(@RequestBody Perfil perfil) {

		long id = nextId.incrementAndGet();
		perfil.setId(id);
		perfiles.put(id, perfil);

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
	public ResponseEntity<Perfil> getItem(@PathVariable long id) {

		Perfil savedItem = perfiles.get(id);

		if (savedItem != null) {
			return new ResponseEntity<>(savedItem, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Perfil> borraItem(@PathVariable long id) {

		Perfil savedPerfil = perfiles.get(id);

		if (savedPerfil != null) {
			perfiles.remove(savedPerfil.getId());
			return new ResponseEntity<>(savedPerfil, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}

