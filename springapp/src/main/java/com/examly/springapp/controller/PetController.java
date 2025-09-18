package com.examly.springapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examly.springapp.model.Pet;
import com.examly.springapp.service.PetService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/pets")
public class PetController {
    
@Autowired
PetService petsrev;

@PostMapping
public ResponseEntity<Pet> create (@Valid @RequestBody Pet pet){
    Pet saved = petsrev.createPet(pet);
return ResponseEntity.status(HttpStatus.CREATED).body(saved);
}


}