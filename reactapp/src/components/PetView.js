import React, { useEffect, useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Button,
  Box,
  TextField,
  MenuItem
} from "@mui/material";
import axios from "axios";

const PetView = () => {
  const [pets, setPets] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [nameFilter, setNameFilter] = useState("");
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [sortDir, setSortDir] = useState("asc");
  const [pageSize,setPageSize]=useState(1)

  const API_BASE = "https://8080-acdcaacedadaebab331045538adaaadfdebeaone.premiumproject.examly.io";

  const fetchPets = async () => {
    try {
      const res = await axios.get(`${API_BASE}/api/pets/paginated`, {
        params: {
          page,
          size: pageSize,
          name: nameFilter,
          species: speciesFilter,
          sortBy,
          sortDir
        }
      });
      setPets(res.data.content);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this pet?")) {
      try {
        await axios.delete(`${API_BASE}/api/pets/${id}`);
        fetchPets();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleEdit = (id) => {
    alert("Edit pet with ID: ${id}");
  };

  useEffect(() => {
    fetchPets();
  }, [page, nameFilter, speciesFilter, sortBy, sortDir,pageSize]);

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3} textAlign="center">
        Pet List
      </Typography>

      {/* Filters */}
      <Box display="flex" gap={2} mb={3} justifyContent="center">
        <TextField
          label="Filter by Name"
          value={nameFilter}
          onChange={(e) => setNameFilter(e.target.value)}
          size="small"
        />
        <TextField
          label="Filter by Species"
          value={speciesFilter}
          onChange={(e) => setSpeciesFilter(e.target.value)}
          size="small"
        />
        <TextField
          label="Enter required data per page"
          value={pageSize}
          onChange={(e) => setPageSize(e.target.value)}
          size="small"
        />
        <TextField
          select
          label="Sort By"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          size="small"
        >
          <MenuItem value="id">ID</MenuItem>
          <MenuItem value="name">Name</MenuItem>
          <MenuItem value="age">Age</MenuItem>
        </TextField>
        <TextField
          select
          label="Sort Direction"
          value={sortDir}
          onChange={(e) => setSortDir(e.target.value)}
          size="small"
        >
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </TextField>
      </Box>

      {/* Pet Cards */}
      <Grid container spacing={3}>
        {pets.map((pet) => (
          <Grid item xs={12} sm={6} md={4} key={pet.id}>
            <Card>
              {pet.imageUrl && (
                <CardMedia
                  component="img"
                  height="200"
                  image={pet.imageUrl}
                  alt={pet.name}
                />
              )}
              <CardContent>
                <Typography variant="h6">{pet.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  Species: {pet.species}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Breed: {pet.breed}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Age: {pet.age}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Status: {pet.adoptionStatus}
                </Typography>
                {pet.description && (
                  <Typography variant="body2" color="text.secondary" mt={1}>
                    {pet.description}
                  </Typography>
                )}
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  onClick={() => handleEdit(pet.id)}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  color="error"
                  onClick={() => handleDelete(pet.id)}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pagination Controls */}
      <Box mt={4} display="flex" justifyContent="center" gap={2}>
        <Button
          variant="outlined"
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        >
          Previous
        </Button>
        <Typography variant="body1">
          Page {page + 1} of {totalPages}
        </Typography>
        <Button
          variant="outlined"
          disabled={page >= totalPages - 1}
          onClick={() => setPage(page + 1)}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};
export default PetView;