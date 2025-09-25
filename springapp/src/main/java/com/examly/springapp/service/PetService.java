// springapp/src/main/java/com/examly/springapp/service/PetService.java
package com.examly.springapp.service;
import com.examly.springapp.model.Pet;
import com.examly.springapp.repository.PetRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PetService {
    private final PetRepository repo;
    public PetService(PetRepository repo){ this.repo = repo; }

    public List<Pet> getAllPets(){
         return repo.findAll(); }

    public Optional<Pet> getPetById(Long id){ 
        return repo.findById(id); }

    public Pet createPet(Pet pet){
        // default status if null
        if(pet.getAdoptionStatus()==null) pet.setAdoptionStatus("Available");
        return repo.save(pet);
    }

    public Pet updatePet(Pet pet){ 
        return repo.save(pet); }


    public Page<Pet> getPets(String name, String species, Pageable pageable) {
            if (!name.isEmpty() && !species.isEmpty()) {
                return repo.findByNameContainingIgnoreCaseAndSpeciesContainingIgnoreCase(name, species, pageable);
            } else if (!name.isEmpty()) {
                return repo.findByNameContainingIgnoreCase(name, pageable);
            } else if (!species.isEmpty()) {
                return repo.findBySpeciesContainingIgnoreCase(species, pageable);
            } else {
                return repo.findAll(pageable);
            }
        }
}
