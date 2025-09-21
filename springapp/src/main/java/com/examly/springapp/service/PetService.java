package com.examly.springapp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.examly.springapp.model.Pet;
import com.examly.springapp.repository.PetRepository;

@Service
public class PetService {
    
@Autowired
PetRepository petrepo;

public Pet createPet(Pet pet){

    return petrepo.save(pet);
}

public List<Pet> getAllPets(){
    return petrepo.findAll(); }

public Optional<Pet> getPetById(Long id){ 
   return petrepo.findById(id); }



   public Optional<Pet> updatePet(Long id, Pet updatedPet) {
    return petrepo.findById(id).map(existingPet -> {
        // set fields (update only what you need)
        existingPet.setName(updatedPet.getName());
        existingPet.setAge(updatedPet.getAge());
        existingPet.setAdoptionSstatus(updatedPet.getAdoptionSstatus());
        existingPet.setDescription(updatedPet.getDescription());
        
        return petrepo.save(existingPet);
    });
}

// ✅ Delete Pet
public boolean deletePet(Long id) {
    return petrepo.findById(id).map(pet -> {
        petrepo.delete(pet);
        return true;
    }).orElse(false);
}


}
