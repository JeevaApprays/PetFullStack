package com.examly.springapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
public class Pet {
    
    @Id
   private long id;
   private String name;
   private String species;
   private String breed;
   private int age;
   private String description;
   private String imageUrl;
   private String adoptionStatus;

}
