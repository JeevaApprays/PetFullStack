import React from "react";
import { Box, Typography } from "@mui/material";
 
const Home = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      textAlign="center"
    >
      <Typography variant="h4" fontWeight="bold" color="red">
        Welcome to Pet Adoption Management System
      </Typography>
      <Typography variant="h4" fontWeight="bold" color="red">
        Thanks for Accessing
      </Typography>
    </Box>
  );
};
 
export default Home;