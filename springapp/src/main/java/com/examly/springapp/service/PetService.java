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


}
