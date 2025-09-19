package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Pet;
import com.examly.springapp.service.PetService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;



@RestController
public class PetController {
    
@Autowired
PetService petService;

@PostMapping("/api/pets")
public Pet createPet(@RequestBody Pet pet){

    return petService.createPet(pet);
}






}
