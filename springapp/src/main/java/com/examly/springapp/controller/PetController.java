package com.examly.springapp.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

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
    public List<Pet> getAll(){ 
        return petService.getAllPets(); 
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getById(@PathVariable Long id) {
        Optional<Pet> opt = petService.getPetById(id);
        if (opt.isPresent()) {
            Pet pet = opt.get();
            // 200 OK with pet as body
            return ResponseEntity.ok(pet);
        } else {
            // 404 with custom JSON message
            Map<String,String> body = Map.of("message", "Pet with ID " + id + " not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(body);
        }
    }
    

    @PutMapping("/api/pets/{id}")
    public ResponseEntity<?> updatePet(@PathVariable Long id, @RequestBody Pet updatedPet) {
        Optional<Pet> optionalPet = petService.updatePet(id, updatedPet);
        if (optionalPet.isPresent()) {
            // Success: return updated pet
            return ResponseEntity.ok(optionalPet.get());
        } else {
            // Failure: pet not found
            Map<String, String> errorBody = Map.of("message", "Pet with ID " + id + " not found");
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorBody);
        }
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
