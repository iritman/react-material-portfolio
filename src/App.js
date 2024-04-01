import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { orange, green } from "@mui/material/colors";
import Profile from "./components/profile/profile";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import SkillsServices from "./pages/skills-services";

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

export default function FullWidthGrid() {
  const [active_link, setActiveLink] = useState(false);

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
            <SkillsServices />
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
// import React from "react";
// import "./App.css";
// import { Container, Grid } from "@mui/material";
// import Profile from "./components/profile/profile";
// import Header from "./components/header/header";
// import Portfolio from "./pages/portfolio/portfolio";
// import Resume from "./pages/resume/resume";
// import Footer from "./components/footer/footer";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <Container>
//       <Grid container spacing={4} style={{ backgroundColor: "blue" }}>
//         <Grid
//           item
//           xs={12}
//           sm={12}
//           md={4}
//           lg={3}
//           style={{ backgroundColor: "orange" }}
//         >
//           <Profile />
//         </Grid>
//         <Grid item xs style={{ backgroundColor: "red" }}>
//           <Header />
//           <Router>
//             <Routes>
//               <Route path="/portfolio" element={<Portfolio />} />
//               <Route path="/resume" element={<Resume />} />
//             </Routes>
//           </Router>
//           <Footer />
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default App;
