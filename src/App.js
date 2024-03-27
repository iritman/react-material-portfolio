import React from "react";
import "./App.css";
import { Container, Grid } from "@mui/material";
import Profile from "./components/profile/profile";
import Header from "./components/header/header";
import Portfolio from "./pages/portfolio/portfolio";
import Resume from "./pages/resume/resume";
import Footer from "./components/footer/footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          style={{ backgroundColor: "blue" }}
        >
          <Profile />
        </Grid>
        <Grid item xs style={{ backgroundColor: "red" }}>
          <Header />
          <Router>
            <Routes>
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
