import React from "react";
import {
  AppBar,
  Toolbar,
  Paper,
  Typography,
  Box,
  Tabs,
  Tab,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Home as HomeIcon, Send as SendIcon } from "@mui/icons-material";

const Header = ({ activeLink, onChange }) => {
  const tabs = [
    { title: "Resume", link: "resume" },
    { title: "Skills & Services", link: "skills" },
    { title: "Portfolio", link: "portfolio" },
    { title: "Contact", link: "contact" },
  ];

  return (
    <Paper>
      <AppBar sx={{ backgroundColor: "background.paper" }}>
        <Toolbar disableGutters>
          {/* ---------- HOME ICON ---------- */}
          <Box
            sx={{
              backgroundColor: "primary.main",
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
              display: {
                xs: "none",
                md: "flex",
              },
              cursor: "pointer",
            }}
            p={2}
          >
            <HomeIcon />
          </Box>
          {/* ---------- TABS ---------- */}
          <Tabs
            value={activeLink}
            onChange={onChange}
            variant="scrollable"
            scrollButtons="auto"
            // allowScrollButtonsMobile
            sx={{ ml: 1, flexGrow: 1, display: "flex" }}
          >
            {tabs.map((t) => (
              <Tab
                key={t.link}
                value={t.link}
                label={<Typography variant="button">{t.title}</Typography>}
                component={Link}
                to={`/${t.link}`}
              />
            ))}
            {/* ------------ 2 */}
            {/* {tabs.map((t) => (
                <Tab
                  key={t}
                  value={t}
                  label={<Typography variant="button">{t}</Typography>}
                />
              ))} */}
            {/* ------------ 1 */}
            {/* <Tab value="resume" label="RESUME" />
            <Tab value="portfolio" label="PORTFOLIO" />
            <Tab value="blog" label="BLOG" />
            <Tab value="contact" label="CONTACT" /> */}
          </Tabs>
          {/* ---------- HIRE ME ---------- */}
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            className="rounded-btn"
            sx={{
              marginRight: 2,
              display: {
                xs: "none",
                md: "flex",
              },
            }}
          >
            <Typography variant="button">Hire Me</Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Paper>
  );
};

export default Header;
