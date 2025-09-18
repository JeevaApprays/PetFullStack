package com.examly.springapp.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;


@Entity
public class Pet {
    @Id
    @GeneratedValue(strategy = GenetationType.IDENTITY)

    private Long id;
    private String name;
    private String species;
    private String breed;
    private int age;
    pri

}
