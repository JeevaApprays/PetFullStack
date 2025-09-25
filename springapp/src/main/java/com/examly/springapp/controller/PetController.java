// springapp/src/main/java/com/examly/springapp/controller/PetController.java
package com.examly.springapp.controller;

import com.examly.springapp.model.Pet;
import com.examly.springapp.service.PetService;
import jakarta.validation.Valid;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import org.springframework.data.domain.Sort;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@CrossOrigin(origins="https://8081-acdcaacedadaebab331045538adaaadfdebeaone.premiumproject.examly.io")
@RequestMapping("/api/pets")
public class PetController {
    private final PetService svc;
    public PetController(PetService svc){ this.svc = svc; }

    @GetMapping
    public List<Pet> getAll(){ return svc.getAllPets(); }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        return svc.getPetById(id)
            .<ResponseEntity<?>>map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of("message", "Pet with ID " + id + " not found")));
    }

    @PostMapping
    public ResponseEntity<Pet> create(@Valid @RequestBody Pet pet){
        Pet saved = svc.createPet(pet);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }


@GetMapping("/paginated")
    public Page<Pet> getPetsPaginated(
            @RequestParam(defaultValue = "") String name,
            @RequestParam(defaultValue = "") String species,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "5") int size,
            @RequestParam(defaultValue = "id") String sortBy,
            @RequestParam(defaultValue = "asc") String sortDir
    ) {
        Sort sort = sortDir.equalsIgnoreCase("asc") ? Sort.by(sortBy).ascending()
                                                    : Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(page, size, sort);
        return svc.getPets(name,species,pageable);}

}
