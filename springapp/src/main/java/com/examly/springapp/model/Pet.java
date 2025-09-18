package com.examly.springapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Pet {
    
    @Id
    long id;
    String name;
    String species;
    String breed;
    int age;
    String description;
    String imageUrl;
    String adoptionStatus;

}
