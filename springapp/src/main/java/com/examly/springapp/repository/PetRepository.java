package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examly.springapp.model.Pet;

public interface PetRepository extends JpaRepository<Pet,Long>{

}
