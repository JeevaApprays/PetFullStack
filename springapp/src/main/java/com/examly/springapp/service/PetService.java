package com.examly.springapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Pet;
import com.examly.springapp.repository.PetRepository;


@Service
public class PetService {
    @Autowired
    PetRepository petRepo;

    public Pet createPet(Pet pet){
        return petRepo.save(pet);
    }

public List<Pet> getAllPets(){
    return petRepo.findAll();
}

public String updatePet(Long id,Pet pet){
    if(petRepo.existsById(id)){
        petRepo.save(pet);
        return "updated successfully";
    }
    else{
        return "id not Found";
      }
    }


}
