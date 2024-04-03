import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { orange, green } from "@mui/material/colors";
import Profile from "./components/profile/profile";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import AboutMe from "./pages/about-me";
import Resume from "./pages/resume";
import SkillsServices from "./pages/skills-services";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import { Routes, Route, useLocation } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[400],
    },
    secondary: {
      main: green[400],
    },
  },
});

const App = () => {
  const [active_link, setActiveLink] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const current_location = location.pathname.replace("/", "");

    setActiveLink(current_location.length > 0 ? current_location : false);
  }, [location]);

  const handleLinkChange = (event, newValue) => {
    setActiveLink(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="App" maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item sm={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs>
            <Header activeLink={active_link} onChange={handleLinkChange} />

            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/skills" element={<SkillsServices />} />
              <Route path="/services" element={<SkillsServices />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
