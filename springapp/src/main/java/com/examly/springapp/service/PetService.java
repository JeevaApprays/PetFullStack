package com.examly.springapp.service;

import com.examly.springapp.model.Pet;
import com.examly.springapp.repository.PetRepository;

public class PetService {
    
    PetRepository petRepo;
    public Pet createPet(Pet pet){
        return petRepo.save(pet);
    }

}
