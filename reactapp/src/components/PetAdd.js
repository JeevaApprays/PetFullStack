import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  MenuItem
} from "@mui/material";
import axios from "axios";
 
const PetAdd = () => {
  const [pet, setPet] = useState({
    name: "",
    species: "",
    breed: "",
    age: "",
    description: "",
    imageUrl: "",
    adoptionStatus: "Available"
  });
 
  const handleChange = (e) => { //input data change
    setPet({ ...pet, [e.target.name]: e.target.value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
      await axios.post("https://8080-acdcaacedadaebab331045538adaaadfdebeaone.premiumproject.examly.io/api/pets", pet);
      alert("Pet added successfully!");
      setPet({
        name: "",
        species: "",
        breed: "",
        age: "",
        description: "",
        imageUrl: "",
        adoptionStatus: "Available"
      });
    } catch (error) {
      console.error(error);
      alert("Failed to add pet");
    }
  };
 
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      border="5px solid blue"
    >
      <Paper sx={{ p: 4, width: "100%", maxWidth: 500 , border: "solid 2px red"}}>
        <Typography variant="h5" mb={2} textAlign="center">
          Add New Pet
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Pet Name"
            name="name"
            value={pet.name}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Species"
            name="species"
            value={pet.species}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Breed"
            name="breed"
            value={pet.breed}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Age"
            type="number"
            name="age"
            value={pet.age}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            inputProps={{ min: 0 }}
          />
          <TextField
            label="Description"
            name="description"
            value={pet.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
            margin="normal"
          />
          <TextField
            label="Image URL"
            name="imageUrl"
            value={pet.imageUrl}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            select
            label="Adoption Status"
            name="adoptionStatus"
            value={pet.adoptionStatus}
            onChange={handleChange}
            fullWidth
            margin="normal"
          >
            <MenuItem value="Available">Available</MenuItem>
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Adopted">Adopted</MenuItem>
          </TextField>
 
          <Box mt={2} textAlign="center">
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};
 
export default PetAdd;