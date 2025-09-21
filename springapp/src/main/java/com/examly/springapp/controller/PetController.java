package com.examly.springapp.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Pet;
import com.examly.springapp.service.PetService;


@RestController
public class PetController {
    
@Autowired
PetService petService;

@PostMapping("/api/pets")
public Pet createPet(@RequestBody Pet pet){

    return petService.createPet(pet);
}

 @GetMapping
    public List<Pet> getAll(){ return petService.getAllPets(); }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id){
        return petService.getPetById(id)
            .<ResponseEntity<?>>map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of("message", "Pet with ID " + id + " not found")));
    }


 @PutMapping("/api/pets/{id}")
    public ResponseEntity<?> updatePet(@PathVariable Long id, @RequestBody Pet updatedPet) {
        return petService.updatePet(id, updatedPet)
            .<ResponseEntity<?>>map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of("message", "Pet with ID " + id + " not found")));
    }

    // ✅ Delete Pet
    @DeleteMapping("/api/pets/{id}")
    public ResponseEntity<?> deletePet(@PathVariable Long id) {
        boolean deleted = petService.deletePet(id);
        if (deleted) {
            return ResponseEntity.ok(Map.of("message", "Pet deleted successfully"));
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(Map.of("message", "Pet with ID " + id + " not found"));
        }
    }

}
