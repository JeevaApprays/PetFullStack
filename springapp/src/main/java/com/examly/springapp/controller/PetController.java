package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.examly.springapp.model.Pet;
import com.examly.springapp.service.PetService;


@RestController
@RequestMapping("/api/pets")
public class PetController {
    
@Autowired
PetService petsrev;

@PostMapping
public Pet create (@RequestBody Pet pet){
return petsrev.createPet(pet);
}

@GetMapping
public 

}