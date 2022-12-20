package com.example.demo;

import java.util.Collection;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;

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

public class MensajeController {

@RestController
@RequestMapping("/mensajes")
public class PerfilController {

	Map<Long, Mensaje> mensajes = new ConcurrentHashMap<>(); 
	AtomicLong nextId = new AtomicLong(0);
	
	@GetMapping
	public Collection<Mensaje> items() {
		return mensajes.values();
	}

	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Mensaje nuevoPerfil(@RequestBody Mensaje perfil) {

		long id = nextId.incrementAndGet();
		perfil.setId(id);
		mensajes.put(id, perfil);

		return perfil;
	}

	@PutMapping("/{id}")
	public ResponseEntity<Mensaje> actulizaItem(@PathVariable long id, @RequestBody Mensaje updtMensaje) {

		Mensaje savedPerfil = mensajes.get(updtMensaje.getId());

		if (savedPerfil != null) {

			mensajes.put(id, updtMensaje);

			return new ResponseEntity<>(updtMensaje, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@GetMapping("/{id}")
	public ResponseEntity<Mensaje> getItem(@PathVariable long id) {

		Mensaje savedItem = mensajes.get(id);

		if (savedItem != null) {
			return new ResponseEntity<>(savedItem, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Mensaje> borraItem(@PathVariable long id) {

		Mensaje savedMessage = mensajes.get(id);

		if (savedMessage != null) {
			mensajes.remove(savedMessage.getId());
			return new ResponseEntity<>(savedMessage, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

}
}
