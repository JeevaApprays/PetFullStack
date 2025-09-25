// springapp/src/main/java/com/examly/springapp/repository/PetRepository.java
package com.examly.springapp.repository;

import com.examly.springapp.model.Pet;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PetRepository extends JpaRepository<Pet,Long> {


    Page<Pet> findByNameContainingIgnoreCase(String name, Pageable pageable);

    Page<Pet> findBySpeciesContainingIgnoreCase(String species, Pageable pageable);

    Page<Pet> findByNameContainingIgnoreCaseAndSpeciesContainingIgnoreCase(String name, String species, Pageable pageable);

 }
