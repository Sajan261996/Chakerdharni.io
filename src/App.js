import React from "react";
import Body from "./Body/Body";
import Header from "./Header/Header";
import { Container, CssBaseline, Typography, Box } from "@mui/material";
import "./App.css";

function App() {
  return (
    <Container className="App" maxWidth="lg" sx={{ mt: 3, textAlign: "center" }}>
      <CssBaseline />
      <Header />
      <Box className="welcome-section" sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: "bold", color: "#ff4081" }}>
          Welcome to Our Chakersharni
        </Typography>
        <Typography variant="h5" sx={{ color: "#3f51b5", fontWeight: "bold", mt: 1 }}>
          Chelo Shop Cela – The All-in-One Shopping Hub!
        </Typography>
        <Typography variant="body1" sx={{ color: "#4caf50", fontSize: "1.2rem", mt: 2 }}>
          Chakerdharni brings you a seamless shopping experience with the latest fashion, gadgets, 
          home essentials, and more – all in one place! <strong>Shop smart, shop easy, shop everything!</strong>
        </Typography>
      </Box>
      <Body />
    </Container>
  );
}

export default App;
