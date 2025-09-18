package com.examly.springapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.examly.springapp.model.Pet;
import com.examly.springapp.service.PetService;


@RestController
public class PetController {
    
@Autowired
PetService petService;

@PostMapping("/api/pets")
public Pet create (@RequestBody Pet pet){
return petService.createPet(pet);
}

@GetMapping("/api/pets")
public List<Pet> getAllPets(){
    
    return petService.getAllPets();
}

@PutMapping("/api/pets/{id}")
public String updatePet(@PathVariable  Long id,@RequestBody Pet pet){
return petService.updatePet(id,pet);

    }
}