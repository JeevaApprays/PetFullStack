import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Container } from "@mui/material";
import Home from "./components/Home";
import PetAdd from "./components/PetAdd";
import PetView from "./components/PetView";
 
const App = () => {
  return (
    <Router>
      {/* Navbar */}
      <AppBar position="static" sx={{ backgroundColor: "green" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Pet Adoption
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/add">
            Add Pet
          </Button>
          <Button color="inherit" component={Link} to="/view">
            View Pet List
          </Button>
        </Toolbar>
      </AppBar>
 
      {/* Page Content */}
      <Container sx={{ mt: 3 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<PetAdd />} />
          <Route path="/view" element={<PetView />} />
        </Routes>
      </Container>
    </Router>
  );
};
 
export default App;