import React, { useState } from 'react'
import axios from 'axios';

const Register = () => {
    const [formData, setFormData] = useState({
      name: '',
      species: '',
      breed: '',
      age: '',
      description: '',
      imageUrl:'',
      adoptionStatus:'',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      
    
      const handleSubmit = async (e) => {
        e.preventDefault();


       try {
          
          const response = await  axios.post('https://8080-acdcaacedadaebab331045538adaaadfdebeaone.premiumproject.examly.io/api/pets', formData);
          console.log('User registered:', response.data);
          alert('Registration successful');
        } catch (error) {
          console.error('There was an error registering the user!', error);
          alert('Registration failed');
       }
      };
    
      return (
        <div>
          <h2>Pet Add Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>species:</label>
              <input
                type="text"
                name="species"
                value={formData.species}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>breed:</label>
              <input
                type="text"
                name="breed"
                value={formData.breed}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>age:</label>
              <input
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Description:</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Image URL : </label>
              <input
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label>Adoption Status : </label>
              <input
                type="text"
                name="adoptionStatus"
                value={formData.adoptionStatus}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit">Register</button>
          </form>
          {/* <p>Already have an account? <Li to="/">Login here</Link></p> */}
        </div>
      );

}

export default Register